import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Salida } from './salidas.entity';

@Injectable()
export class SalidasService extends GenericService<Salida> {
    constructor(
        @InjectRepository(Salida) salidaRepository: Repository<Salida>,
      ) {
        super(salidaRepository);
      }
}
