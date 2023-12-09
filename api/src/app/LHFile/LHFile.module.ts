import { Module } from '@nestjs/common';
import { LHFileService } from './LHFile.service';
import { LHFileController } from './LHFile.controller';

@Module({
  controllers: [LHFileController],
  providers: [LHFileService],
})
export class LHFileModule {}
