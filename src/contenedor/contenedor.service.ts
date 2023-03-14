import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Contenedor } from './contenedor.entity';

@Injectable()
export class ContenedorService extends GenericService<Contenedor> {
  constructor(
    @InjectRepository(Contenedor) contenedorRepository: Repository<Contenedor>,
  ) {
    super(contenedorRepository);
  }
}
