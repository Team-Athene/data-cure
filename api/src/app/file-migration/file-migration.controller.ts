import { Body, Controller, Post } from '@nestjs/common'
import { FileMigrationService } from './file-migration.service'
import { ApiTags } from '@nestjs/swagger'
import { S3Dto } from './dto/s3.dto'

@ApiTags('File Migration')
@Controller('file-migration')
export class FileMigrationController {
  constructor(private readonly fileMigrationService: FileMigrationService) {}

  @Post('s3')
  async migrateS3(@Body() s3: S3Dto) {
    return await this.fileMigrationService.migrateS3(s3)
  }
}
