import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';
import { EmpleadoData } from './dto/empleado.dto';

@Controller('empleado')
@ApiTags('empleados')
export class EmpleadoController extends GenericController<
  Empleado,
  EmpleadoService
> {
  constructor(private readonly empleadoService: EmpleadoService) {
    super(empleadoService);
  }


  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBasicAuth()
  @ApiBody({ type: EmpleadoData, required: true })
  async create(@Body() entity: EmpleadoData) {
    return this.empleadoService.create(entity);
  }
}
