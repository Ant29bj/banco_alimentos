import { Module } from '@nestjs/common';
import { DataImportController } from './data-import.controller';
import { DataImportService } from './data-import.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto]), // Importar el repositorio ProductoRepository
  ],
  providers: [DataImportService],
  controllers: [DataImportController],
})
export class DataImportModule {}
