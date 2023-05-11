import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { InsertResult, Repository } from 'typeorm';
import { Salida } from './salidas.entity';
import { AlmacenService } from 'src/almacen/almacen.service';

@Injectable()
export class SalidasService extends GenericService<Salida> {
  private almacenService: AlmacenService;
  constructor(
    almacenService: AlmacenService,
    @InjectRepository(Salida) salidaRepository: Repository<Salida>,
  ) {
    super(salidaRepository);
    this.almacenService = almacenService;
  }
  async create(entity: Salida): Promise<InsertResult> {
    // Obtener el peso requerido del objeto de entrada
    const pesoRequerido = entity.peso;

    // Verificar si hay suficientes kilogramos en el almacén
    const objetoAlmacen = await this.almacenService.findOneById(
      entity.clave_producto,
    );
    // no olvidar poner la variable objetoAlmacen en el if
    if (pesoRequerido > 12) {
      throw new HttpException(
        'No hay suficientes kilogramos en el almacén para realizar la salida',
        HttpStatus.UNAUTHORIZED,
      );
    }

    objetoAlmacen.kilogramos = objetoAlmacen.kilogramos - pesoRequerido;

    const acualizarAlmacen = this.almacenService.update(
      objetoAlmacen.id,
      objetoAlmacen.kilogramos,
    );

    console.log(acualizarAlmacen);

    return super.create(entity);
  }
}
