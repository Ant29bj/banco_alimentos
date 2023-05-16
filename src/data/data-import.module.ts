import { Module } from '@nestjs/common';
import { DataImportController } from './data-import.controller';
import { DataImportService } from './data-import.service';

@Module({
  providers: [DataImportService],
  controllers: [DataImportController],
})
export class DataImportModule {}
