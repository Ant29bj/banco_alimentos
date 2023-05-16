import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { DataImportData } from './dto/data-import.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/producto/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DataImportService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async parseCsvToEntities(filePath: string): Promise<DataImportData[]> {
    const entities: DataImportData[] = [];
    
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser({ headers: ['codigo_sat', 'descripcion', 'tipo'] })) // Especificar los nombres de las columnas
        .on('data', (data: any) => {
          const producto = new DataImportData();
          producto.codigo_sat = data.codigo_sat;
          producto.descripcion = data.descripcion;
          producto.tipo = data.tipo;
          entities.push(producto);
        })
        .on('end', () => resolve())
        .on('error', (error: any) => reject(error));
    });

        // Transformar los objetos DataImportData a objetos Producto
        const productos: Producto[] = entities.map(entity => {
          const producto = new Producto();
          producto.codigo_sat = entity.codigo_sat;
          producto.descripcion = entity.descripcion;
          producto.tipo = entity.tipo;
          return producto;
        });

    // Realizar bulk insert utilizando el Query Builder
    await this.productoRepository
      .createQueryBuilder()
      .insert()
      .into(Producto)
      .values(productos)
      .orIgnore() // Ignorar la inserción en caso de conflicto
      .execute();
        ///Favor de manejar el error 500
    return entities;
  }
}
