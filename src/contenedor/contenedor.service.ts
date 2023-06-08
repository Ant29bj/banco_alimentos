import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Contenedor } from './contenedor.entity';
import { ContenedorData } from './dto/contenedor.dto';

@Injectable()
export class ContenedorService extends GenericService<Contenedor> {
  constructor(
    @InjectRepository(Contenedor)
    private contenedorRepository: Repository<Contenedor>,
  ) {
    super(contenedorRepository);
  }
  getContenedor() {
    return this.contenedorRepository.find({});
  }

  async getContenedorId(id: number) {
    const contenedorFound = await this.contenedorRepository.findOne({
      where: { id },
    });

    if (!contenedorFound) {
      return new HttpException(
        'Contenedor no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return contenedorFound;
  }

  async createContenedor(contenedor: ContenedorData) {
    const contenedorFound = await this.contenedorRepository.findOne({
      where: {
        identificador: contenedor.identificador,
      },
    });

    if (contenedorFound) {
      return new HttpException('El Contenedor ya existe', HttpStatus.CONFLICT);
    }

    const newContenedor = this.contenedorRepository.create(contenedor);
    return this.contenedorRepository.save(newContenedor);
  }

  async deleteContenedor(id: number) {
    const contenedorFound = await this.contenedorRepository.findOne({
      where: {
        id,
      },
    });

    if (!contenedorFound) {
      return new HttpException(
        'Contenedor no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.contenedorRepository.delete({ id });
  }

  async updateContenedor(id: number, contenedor: ContenedorData) {
    const contenedorFound = await this.contenedorRepository.findOne({
      where: {
        id,
      },
    });

    if (!contenedorFound) {
      return new HttpException(
        'Contenedor no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    const updateContenedor = Object.assign(contenedorFound, contenedor);

    return this.contenedorRepository.save(updateContenedor);
  }
}
