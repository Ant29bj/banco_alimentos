import { Controller, Get } from '@nestjs/common';
import { DataImportService } from './data-import.service';
import { DataImportData } from './dto/data-import.dto';

@Controller('csv')
export class DataImportController {
  constructor(private readonly dataService: DataImportService) {}

  @Get('/importar')
  async getCsvData(): Promise<DataImportData[]> {
    const filePath = './src/data/data-assets/catalogo.csv'; // Ruta del archivo CSV a leer

    try {
      const entities = await this.dataService.parseCsvToEntities(filePath);
      return entities;
    } catch (error) {
      // Manejo de errores
      throw new Error('Error al leer el archivo CSV.');
    }
  }
}
