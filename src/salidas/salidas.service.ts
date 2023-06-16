import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { InsertResult, Repository } from 'typeorm';
import { Salida } from './salidas.entity';
import { AlmacenService } from 'src/almacen/almacen.service';
import { SalidaData } from './dto/salidas.dto';
import { AlmacenController } from 'src/almacen/almacen.controller';
import { AlmacenData } from 'src/almacen/dto/almacen.dto';

@Injectable()
export class SalidasService extends GenericService<Salida> {
  constructor(
    private almacenService: AlmacenService,
    private almacenController: AlmacenController,
    @InjectRepository(Salida) private salidaRepository: Repository<Salida>,
  ) {
    super(salidaRepository);
    this.almacenService = almacenService;
  }

  getSalidas() {
    return this.salidaRepository.find({
      relations: ['clave_producto.clave_producto'],
    });
  }

  async getSalidaId(id: number) {
    const salidaFound = await this.salidaRepository.findOne({
      where: { id },
      relations: ['clave_producto'],
    });

    if (!salidaFound) {
      return new HttpException('Salida no encontrado', HttpStatus.NOT_FOUND);
    }

    return salidaFound;
  }

  async createSalida(entity: Salida): Promise<InsertResult> {
    const salidaFound = await this.salidaRepository.findOne({
      where: { folio_salida: entity.folio_salida },
    });

    if (salidaFound) {
      throw new HttpException('Salida ya existe', HttpStatus.FOUND);
    }
    // Obtener el peso requerido del objeto de entrada
    const pesoRequerido = entity.peso;

    // Verificar si hay suficientes kilogramos en el almacén
    const objetoAlmacen = await this.almacenService.findOneById(
      entity.clave_producto,
    );
    console.log(objetoAlmacen);
    // no olvidar poner la variable objetoAlmacen en el if
    if (pesoRequerido > objetoAlmacen.kilogramos) {
      throw new HttpException(
        'No hay suficientes kilogramos en el almacén para realizar la salida',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const NewKilogram = new AlmacenData();
    NewKilogram.kilogramos = objetoAlmacen.kilogramos - pesoRequerido;

    const resultAlmacen = await this.almacenController.updateAlmacen(
      objetoAlmacen.id,
      NewKilogram,
    );
    console.log(resultAlmacen);
    // async updateAlmacen(id: number, almacen: AlmacenData) {
    //   const almacenFound = await this.almacenRepository.findOne({
    //     where: {
    //       id,
    //     },
    //   });

    //   if (!almacenFound) {
    //     return new HttpException('Almacen no encontrado', HttpStatus.NOT_FOUND);
    //   }

    //   const updateAlmacen = Object.assign(almacenFound, almacen);

    //   return this.almacenRepository.save(updateAlmacen);
    // }

    return super.create(entity);
  }

  async deleteSalida(id: number) {
    const salidaFound = await this.salidaRepository.findOne({
      where: {
        id,
      },
    });

    if (!salidaFound) {
      return new HttpException('Salida no encontrada', HttpStatus.NOT_FOUND);
    }

    return this.salidaRepository.delete({ id });
  }

  async updateSalida(id: number, salida: SalidaData) {
    const salidaFound = await this.salidaRepository.findOne({
      where: {
        id,
      },
    });

    if (!salidaFound) {
      return new HttpException('Salida no encontrada', HttpStatus.NOT_FOUND);
    }

    const updateAlmacen = Object.assign(salidaFound, salida);

    return this.salidaRepository.save(updateAlmacen);
  }
}
