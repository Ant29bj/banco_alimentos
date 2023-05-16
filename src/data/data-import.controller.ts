import { Controller, Get } from '@nestjs/common';
import { Producto } from 'src/producto/producto.entity';
import { DataImportService } from './data-import.service';

@Controller('csv')
export class DataImportController {
  constructor(private readonly dataService: DataImportService) {}

  @Get('/perecederos')
  async getCsvData(): Promise<Producto[]> {
    const filePath = './data-assets/perecedero.csv'; // Ruta del archivo CSV a leer

    try {
      const entities = await this.dataService.parseCsvToEntities(filePath);
      return entities;
    } catch (error) {
      // Manejo de errores
      throw new Error('Error al leer el archivo CSV.');
    }
  }
}
