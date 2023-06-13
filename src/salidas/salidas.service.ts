import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { InsertResult, Repository } from 'typeorm';
import { Salida } from './salidas.entity';
import { AlmacenService } from 'src/almacen/almacen.service';
import { SalidaData } from './dto/salidas.dto';

@Injectable()
export class SalidasService extends GenericService<Salida> {
  private almacenService: AlmacenService;
  constructor(
    almacenService: AlmacenService,
    @InjectRepository(Salida) private salidaRepository: Repository<Salida>,
  ) {
    super(salidaRepository);
    this.almacenService = almacenService;
  }

  getSalidas() {
    return this.salidaRepository.find({});
  }

  async getSalidaId(id: number) {
    const salidaFound = await this.salidaRepository.findOne({
      where: { id },
    });

    if (!salidaFound) {
      return new HttpException('Salida no encontrado', HttpStatus.NOT_FOUND);
    }

    return salidaFound;
  }

  async createSalida(entity: Salida): Promise<InsertResult> {
    const salidaFound = await this.salidaRepository.findOne({
      where: { id: entity.id },
    });

    if (salidaFound) {
      throw new HttpException('No existe ese producto', HttpStatus.NOT_FOUND);
    }

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
