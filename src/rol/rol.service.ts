import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Rol} from './rol.entity';

@Injectable()

export class RolService extends GenericService<Rol> {
    constructor(
        @InjectRepository(Rol) rolRepository:
        Repository<Rol>,
    ) {
        super(rolRepository);
    }
}