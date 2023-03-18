import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController extends GenericController<
  Empleado,
  EmpleadoService
> {
  constructor(private readonly empleadoService: EmpleadoService) {
    super(empleadoService);
  }

}

