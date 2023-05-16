import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { Producto } from 'src/producto/producto.entity';

@Injectable()
export class DataImportService {
  async parseCsvToEntities(filePath: string): Promise<Producto[]> {
    return new Promise((resolve, reject) => {
      const entities: Producto[] = [];

      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data: any) => {
          const producto = new Producto();
          producto.descripcion = data[0];
          producto.codigo_sat = parseInt(data[1], 10);
          entities.push(producto);
        })
        .on('end', () => resolve(entities))
        .on('error', (error: any) => reject(error));
    });
  }
}
