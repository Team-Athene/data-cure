// This is used for getting user input.
import {
  S3Client,
  paginateListObjectsV2,
  GetObjectCommand,
  DeleteObjectCommand,
  GetObjectCommandOutput,
} from '@aws-sdk/client-s3'
import { Readable } from 'stream'

type S3Dto = {
  region: string
  accessKeyId: string
  secretAccessKey: string
}
export class AwsService {
  client: S3Client
  constructor(cred: S3Dto) {
    this.client = new S3Client({
      region: cred.region,
      credentials: {
        accessKeyId: cred.accessKeyId,
        secretAccessKey: cred.secretAccessKey,
      },
    })
  }

  // List items from a bucket
  async listItems(bucketName: string) {
    const items = []
    for await (const item of paginateListObjectsV2(
      { client: this.client },
      { Bucket: bucketName },
    )) {
      items.push(item)
    }
    return items
  }

  // download an item from a bucket
  async downloadItem(bucketName: string, key: string) {
    const data = await this.client.send(
      new GetObjectCommand({ Bucket: bucketName, Key: key }),
    )
    return data
  }

  // delete an item from a bucket
  async deleteItem(bucketName: string, key: string) {
    const data = await this.client.send(
      new DeleteObjectCommand({ Bucket: bucketName, Key: key }),
    )
    return data
  }

  // download all items from a bucket
  async downloadAllItems(bucketName: string) {
    const items = []
    for await (const page of paginateListObjectsV2(
      { client: this.client },
      { Bucket: bucketName },
    )) {
      for (const item of page.Contents || []) {
        const objectData = await this.client.send(
          new GetObjectCommand({ Bucket: bucketName, Key: item.Key }),
        )
        // You might want to process or store the objectData here
        items.push({ key: item.Key, data: objectData })
      }
    }
    return items
  }

  // delete all items from a bucket

  async deleteAllItems(bucketName: string) {
    const items = []
    for await (const page of paginateListObjectsV2(
      { client: this.client },
      { Bucket: bucketName },
    )) {
      for (const item of page.Contents || []) {
        const objectData = await this.client.send(
          new DeleteObjectCommand({ Bucket: bucketName, Key: item.Key }),
        )
        // You might want to process or store the objectData here
        items.push({ key: item.Key, data: objectData })
      }
    }
    return items
  }

  // download file from a bucket as buffer
  async downloadFileAsStream(bucket: string, file: string) {
    // async downloadFileAsBuffer(bucket: string, file: string) {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: file,
    })

    const response: GetObjectCommandOutput = await this.client.send(command)

    // Collecting the stream into a buffer
    return response.Body as Readable
    // return this.streamToBuffer(response.Body as Readable)
  }

  // Utility function to convert a stream to a buffer
  streamToBuffer(stream: Readable): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = []
      stream.on('data', (chunk: Buffer) => chunks.push(chunk))
      stream.on('error', reject)
      stream.on('end', () => resolve(Buffer.concat(chunks)))
    })
  }
}
