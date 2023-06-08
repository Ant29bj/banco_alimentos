import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Almacen } from './almacen.entity';
import { AlmacenData } from './dto/almacen.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AlmacenService extends GenericService<Almacen> {
  constructor(
    @InjectRepository(Almacen) private almacenRepository: Repository<Almacen>,
  ) {
    super(almacenRepository);
  }

  getAlmacen() {
    return this.almacenRepository.find({
      relations: ['recibioId', 'clave_producto', 'contribuyente'],
    });
  }

  async getAlmacenId(id: number) {
    const almacenFound = await this.almacenRepository.findOne({
      where: { id },
      relations: ['recibioId', 'clave_producto', 'contribuyente'],
    });

    if (!almacenFound) {
      return new HttpException('Almacen no encontrado', HttpStatus.NOT_FOUND);
    }

    return almacenFound;
  }

  async createAlmacen(almacen: AlmacenData) {
    const almacenFound = await this.almacenRepository.findOne({
      where: {
        folio: almacen.folio,
      },
    });

    if (almacenFound) {
      return new HttpException('El Almacen ya existe', HttpStatus.CONFLICT);
    }

    const newAlmacen = this.almacenRepository.create(almacen);
    return this.almacenRepository.save(newAlmacen);
  }

  async deleteAlmacen(id: number) {
    const almacenFound = await this.almacenRepository.findOne({
      where: {
        id,
      },
    });

    if (!almacenFound) {
      return new HttpException('Almacen no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.almacenRepository.delete({ id });
  }

  async updateAlmacen(id: number, almacen: AlmacenData) {
    const almacenFound = await this.almacenRepository.findOne({
      where: {
        id,
      },
    });

    if (!almacenFound) {
      return new HttpException('Almacen no encontrado', HttpStatus.NOT_FOUND);
    }

    const updateAlmacen = Object.assign(almacenFound, almacen);

    return this.almacenRepository.save(updateAlmacen);
  }
}
