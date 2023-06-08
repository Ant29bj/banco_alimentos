import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Empleado } from './empleado.entity';
import { EmpleadoData } from './dto/empleado.dto';

@Injectable()
export class EmpleadoService extends GenericService<Empleado> {
  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {
    super(empleadoRepository);
  }

  getEmpleados() {
    return this.empleadoRepository.find({
      relations: ['rolId'],
    });
  }

  async getEmpleadoId(id: number) {
    const empleadoFound = await this.empleadoRepository.findOne({
      where: { id },
      relations: ['rolId'],
    });

    if (!empleadoFound) {
      return new HttpException('Empleado no encontrado', HttpStatus.NOT_FOUND);
    }

    return empleadoFound;
  }

  async createEmpleado(empleado: EmpleadoData) {
    const empleadoFound = await this.empleadoRepository.findOne({
      where: {
        nombre: empleado.nombre
      },
    });

    if (empleadoFound) {
      return new HttpException('El Empleado ya existe', HttpStatus.CONFLICT);
    }

    const newEmpleado = this.empleadoRepository.create(empleado);
    return this.empleadoRepository.save(newEmpleado);
  }

  async deleteEmpleado(id: number) {
    const empleadoFound = await this.empleadoRepository.findOne({
      where: {
        id,
      },
    });

    if (!empleadoFound) {
      return new HttpException('Empleado no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.empleadoRepository.delete({ id });
  }

  async updateEmpleado(id: number, empleados: EmpleadoData) {
    const empleadoFound = await this.empleadoRepository.findOne({
      where: {
        id,
      },
    });

    if (!empleadoFound) {
      return new HttpException('Empleado no encontrado', HttpStatus.NOT_FOUND);
    }

    const updateEmpleado = Object.assign(empleadoFound, empleados);

    return this.empleadoRepository.save(updateEmpleado);
  }
}
