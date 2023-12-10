import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

// bucket: 'string',
// key: 'string',
// region: 'string',
// accessKeyId: 'string',

export class S3Dto {
  @ApiProperty({ example: 'datacure-dapp' })
  @IsString()
  @IsNotEmpty()
  bucket: string

  @ApiProperty({ example: '8Qyo70ZCgaoOozu4Zgnit79NUiEaZsYj8iC7GNS9' })
  @IsString()
  @IsNotEmpty()
  key: string

  @ApiProperty({ example: 'ap-south-1' })
  @IsString()
  @IsNotEmpty()
  region: string

  @ApiProperty({ example: 'AKIAZB27L43CC3JJNZX2' })
  @IsString()
  @IsNotEmpty()
  accessKeyId: string
}
