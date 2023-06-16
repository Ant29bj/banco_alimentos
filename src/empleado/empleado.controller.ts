import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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


  @Get()
  getEmpleados() {
    return this.empleadoService.getEmpleados();
  }
  @Get(':id')
  getEmpleadosId(@Param('id', ParseIntPipe) id: number) {
    return this.empleadoService.getEmpleadoId(id);
  }




  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBasicAuth()
  @ApiBody({ type: EmpleadoData, required: true })
  async createEmpleado(@Body() entity: EmpleadoData) {
    return this.empleadoService.createEmpleado(entity);
  }

  @Patch(':id')
  updatePaciente(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Empleado,
  ) {
    return this.empleadoService.updateEmpleado(id, data);
  }

  @Delete(':id')
  deletePaciente(@Param('id', ParseIntPipe) id: number) {
    return this.empleadoService.deleteEmpleado(id);
  }
}
