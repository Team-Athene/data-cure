import { Injectable } from '@nestjs/common'
import { S3Dto } from './dto/s3.dto'
import { AwsService } from 'app/shared/aws.service'
import { LightHouseService } from 'app/shared/lighthouse'
import { createWriteStream, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'

@Injectable()
export class FileMigrationService {
  async migrateS3(s3Cred: S3Dto) {
    const s3 = new AwsService({
      accessKeyId: s3Cred.accessKeyId,
      secretAccessKey: s3Cred.key,
      region: s3Cred.region,
    })
    const LIGHTHOUSE_KEY = '960e7849.ae4587d3c95a4b26960b464253e2fd91'
    const lighthouse = new LightHouseService(LIGHTHOUSE_KEY)
    // List items from a bucket
    const pageBasedData = await s3.listItems(s3Cred.bucket)

    // upload items one by one to lighthouse and delete from s3

    for (const page of pageBasedData) {
      if (!page?.Contents) {
        continue
      }
      for (const item of page.Contents) {
        if (!item?.Key) {
          continue
        }
        const data = await s3.downloadFileAsStream(s3Cred.bucket, item.Key)
        const localFilePath = join('temp', item.Key)
        console.log(
          '🚀 ~ file: file-migration.service.ts:33 ~ FileMigrationService ~ migrateS3 ~ localFilePath:',
          localFilePath,
        )
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

        data.pipe(writableStream)

        const result = await lighthouse.upload(localFilePath)
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
  }
}
