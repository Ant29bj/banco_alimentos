import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Almacen } from './almacen.entity';

@Injectable()
export class AlmacenService extends GenericService<Almacen> {
    constructor (@InjectRepository(Almacen) almacenRepository: Repository<Almacen>) {
        super(almacenRepository);
    }
}
