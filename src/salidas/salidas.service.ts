import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { InsertResult, Repository } from 'typeorm';
import { Salida } from './salidas.entity';
import { AlmacenService } from 'src/almacen/almacen.service';

@Injectable()
export class SalidasService extends GenericService<Salida> {
  private almacenService: AlmacenService
    constructor(
        almacenService: AlmacenService,
        @InjectRepository(Salida) salidaRepository: Repository<Salida>
      ) {
        super(salidaRepository);
        this.almacenService = almacenService;
      }
      async create(entity: Salida): Promise<InsertResult> {
        // Obtener el peso requerido del objeto de entrada
        const pesoRequerido = entity.peso;
    
        // Verificar si hay suficientes kilogramos en el almacén
        const suficientesKilogramos = await this.almacenService.findOneById(entity.clave_producto);
        
        if (pesoRequerido > suficientesKilogramos.kilogramos) {
          // No hay suficientes kilogramos en el almacén
          throw new Error('No hay suficientes kilogramos en el almacén para realizar la salida');
        }
    
        // Continuar con la creación de la salida
        return super.create(entity);
      }
}
