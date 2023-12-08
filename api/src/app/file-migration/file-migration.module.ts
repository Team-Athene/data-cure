import { Module } from '@nestjs/common';
import { FileMigrationService } from './file-migration.service';
import { FileMigrationController } from './file-migration.controller';

@Module({
  controllers: [FileMigrationController],
  providers: [FileMigrationService],
})
export class FileMigrationModule {}
