import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Empleado } from './empleado.entity';

@Injectable()
export class EmpleadoService extends GenericService<Empleado> {
  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {
    super(empleadoRepository);
  }

  getEmpleado() {
    return this.empleadoRepository.find({
      relations: ['rolId'],
    });
  }

  getEmpleadoId(id: number) {
    return this.empleadoRepository.findOne({
      where: { id },
      relations: ['rolId'],
    });
  }

  updateEmpleado(id: number, data: Empleado) {
    return this.empleadoRepository.update({ id }, data);
  }
}
