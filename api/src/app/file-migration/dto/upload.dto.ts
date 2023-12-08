import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

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
}

export class UploadDto {
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

  @ApiProperty({ type: UserDto })
  user!: UserDto
}
