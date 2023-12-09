import { Body, Controller, Get, Post } from '@nestjs/common'
import { LHFileService } from './LHFile.service'
import { ApiTags } from '@nestjs/swagger'
import { S3Dto } from './dto/s3.dto'
import { IPNSDto, UploadDto } from './dto/upload.dto'

@ApiTags('LHFile')
@Controller('lh-file')
export class LHFileController {
  constructor(private readonly LHFileService: LHFileService) {}

  @Post('s3')
  async migrateS3(@Body() s3: S3Dto) {
    return await this.LHFileService.migrateS3(s3)
  }

  @Post('upload-user')
  async uploadUser(@Body() user: UploadDto) {
    return await this.LHFileService.uploadUser(user)
  }

  @Get('jwt')
  async retriveJWT() {
    return await this.LHFileService.retriveJWT()
  }

  @Post('ipns')
  async generateIPNSRecord(@Body() ipnsData: IPNSDto) {
    return await this.LHFileService.generateIPNS(ipnsData.userCid)
  }
}
