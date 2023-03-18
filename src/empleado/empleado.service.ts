import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Empleado } from './empleado.entity';

@Injectable()
export class EmpleadoService extends GenericService<Empleado> {
  constructor(
    @InjectRepository(Empleado) empleadoRepository: Repository<Empleado>,
  ) {
    super(empleadoRepository);
  }
  
}
