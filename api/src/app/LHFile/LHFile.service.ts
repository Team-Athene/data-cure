import { Injectable } from '@nestjs/common'
import { AwsService } from 'app/shared/aws.service'
import { LIGHTHOUSE } from 'app/shared/environment'
import {
  LightHouseService,
  generateIPNS,
  publishIPNSRecord,
  retriveJWT,
  uploadEncryptedFile,
} from 'app/shared/lighthouse'
import { createWriteStream, existsSync, mkdirSync, unlinkSync } from 'fs'
import { hash } from 'ohash'
import { dirname, join } from 'path'
import { S3Dto } from './dto/s3.dto'
import { IPNSDto, UploadDto } from './dto/upload.dto'

@Injectable()
export class LHFileService {
  async publishIPNSRecord(ipnsData: IPNSDto) {
    return await publishIPNSRecord(ipnsData)
  }
  retriveJWT() {
    return retriveJWT()
  }
  generateIPNS() {
    return generateIPNS()
  }
  async uploadUser(Udata: UploadDto) {
    const s3 = new AwsService({
      accessKeyId: Udata.s3.accessKeyId,
      secretAccessKey: Udata.s3.key,
      region: Udata.s3.region,
    })
    const lighthouse = new LightHouseService(LIGHTHOUSE.API_KEY)
    const pageBasedData = await s3.listItems(Udata.s3.bucket)
    for (const page of pageBasedData) {
      if (!page?.Contents) {
        continue
      }
      for (const item of page.Contents) {
        if (!item?.Key) {
          continue
        }
        const data = await s3.downloadFileAsStream(Udata.s3.bucket, item.Key)
        const localFilePath = join('temp', item.Key)
        const directory = dirname(localFilePath)
        if (!existsSync(directory)) {
          mkdirSync(directory, { recursive: true })
        }

        const writableStream = createWriteStream(localFilePath)

        // Error handling for the writable stream
        writableStream.on('error', (error) => {
          console.error('Error writing file:', error)
          throw error
        })

        // data.pipe(writableStream)

        // const result = await lighthouse.upload(localFilePath)
        // console.log(
        //   '🚀 ~ file: file-migration.service.ts:33 ~ FileMigrationService ~ migrateS3 ~ result:',
        //   result,
        // )
        // await s3.deleteItem(s3Cred.bucket, item.Key)
      }
      // const data = s3.downloadFileAsStream(s3Cred.bucket, item.)
      // const readable = Readable.from(data.Body as any)
      // const result = lighthouse.uploadStream(readable, LIGHTHOUSE_KEY)
      // s3.deleteItem(s3Cred.bucket, item.Key)
    }
    throw new Error('Method not implemented.')
  }
  async migrateS3(s3Cred: S3Dto) {
    const s3 = new AwsService({
      accessKeyId: s3Cred.accessKeyId,
      secretAccessKey: s3Cred.key,
      region: s3Cred.region,
    })
    const s3Hash = hash(s3Cred)
    const lighthouse = new LightHouseService(LIGHTHOUSE.API_KEY)
    // List items from a bucket
    const pageBasedData = await s3.listItems(s3Cred.bucket)

    // upload items one by one to lighthouse and delete from s3
    const cids: string[] = []
    for (const page of pageBasedData) {
      if (!page?.Contents) {
        continue
      }
      for (const item of page.Contents) {
        if (!item?.Key) {
          continue
        }
        const data = await s3.downloadFileAsStream(s3Cred.bucket, item.Key)

        // const file = new File([new Blob([data])], item.Key, {
        //   lastModified: Date.now(),
        // })

        const localFilePath = join(s3Hash, item.Key)
        const directory = dirname(localFilePath)
        if (!existsSync(directory)) {
          mkdirSync(directory, { recursive: true })
        }

        const writableStream = createWriteStream(localFilePath)

        // Error handling for the writable stream
        writableStream.on('error', (error) => {
          console.error('Error writing file:', error)
          throw error
        })

        // Wait for the file to be completely written
        await new Promise((resolve, reject) => {
          writableStream.on('finish', resolve)
          writableStream.on('error', reject)
          data.pipe(writableStream)
        })

        try {
          // const result = await lighthouse.upload(localFilePath);
          const result = await uploadEncryptedFile(localFilePath)
          console.log('Upload to Lighthouse result:', result)
          cids.push(result.data[0]?.Hash as string)
          // Optionally delete the local file if no longer needed
          unlinkSync(localFilePath)

          // Delete the file from S3 if required
          // await s3.deleteItem(s3Cred.bucket, item.Key);
        } catch (error) {
          console.error('Error uploading to Lighthouse:', error)
        }
      }
      // const data = s3.downloadFileAsStream(s3Cred.bucket, item.)
      // const readable = Readable.from(data.Body as any)
      // const result = lighthouse.uploadStream(readable, LIGHTHOUSE_KEY)
      // s3.deleteItem(s3Cred.bucket, item.Key)
    }
    return cids
  }
}
