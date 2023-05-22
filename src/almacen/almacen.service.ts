import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Almacen } from './almacen.entity';
import { AlmacenData } from './dto/almacen.dto';

@Injectable()
export class AlmacenService extends GenericService<Almacen> {
  constructor(
    @InjectRepository(Almacen) private almacenRepository: Repository<Almacen>,
  ) {
    super(almacenRepository);
  }

  getAlmacen() {
    return this.find({
      relations: ['recibio', 'clave_producto', 'contribuyente'],
    });
  }

  getAlmacenId(id: number) {
    return this.findOne({
      where: { id },
      relations: ['recibio', 'clave_producto', 'contribuyente'],
    });
  }

  updateAlmacen(id: number, data: AlmacenData) {
    return this.almacenRepository.update({ id }, data);
  }
}
