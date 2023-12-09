import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator'
import { S3Dto } from './s3.dto'

// bucket: 'string',
// key: 'string',
// region: 'string',
// accessKeyId: 'string',

export class UserDto {
  @ApiProperty({ example: 'Dennis Sam' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ example: '123443218765' })
  @IsNumber()
  @IsNotEmpty()
  aadhar: number

  @ApiProperty({ example: '31-45' })
  @IsString()
  @IsNotEmpty()
  age: string

  @ApiProperty({ example: 'Male' })
  @IsString()
  @IsNotEmpty()
  gender: string

  @ApiProperty({ example: 'B+' })
  @IsString()
  @IsNotEmpty()
  bloodGroup: string

  @ApiProperty({ example: 'Caucasian' })
  @IsString()
  @IsNotEmpty()
  ethnicity: string

  @ApiProperty({ example: 'true' })
  @IsBoolean()
  @IsNotEmpty()
  sale: boolean
}

export class UploadDto {
  @ApiProperty({ type: S3Dto })
  s3!: S3Dto

  @ApiProperty({ type: UserDto })
  user!: UserDto
}
