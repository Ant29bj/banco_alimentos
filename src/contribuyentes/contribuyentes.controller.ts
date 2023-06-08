import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { GenericController } from '../generics/generic.controller';
import { Contribuyentes } from './contribuyentes.entity';
import { ContribuyentesService } from './contribuyentes.service';
import { ContribuyentesData } from './dto/contribuyentes.dto';

@Controller('contribuyentes')
@ApiTags('contribuyentes')
export class ContribuyentesController extends GenericController<
  Contribuyentes,
  ContribuyentesService
> {
  constructor(private readonly contribuyentesService: ContribuyentesService) {
    super(contribuyentesService);
  }

  @Get()
  getEmpleados() {
    return this.contribuyentesService.getContribuyentes();
  }

  @Get(':id')
  getEmpleadosId(@Param('id', ParseIntPipe) id: number) {
    return this.contribuyentesService.getContribuyentesId(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBasicAuth()
  @ApiBody({ type: ContribuyentesData, required: true })
  async createContribuyentes(@Body() entity: ContribuyentesData) {
    return this.contribuyentesService.createContribuyentes(entity);
  }

  @Patch(':id')
  updatePaciente(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ContribuyentesData,
  ) {
    return this.contribuyentesService.updateContribuyentes(id, data);
  }

  @Delete(':id')
  deletePaciente(@Param('id', ParseIntPipe) id: number) {
    return this.contribuyentesService.deleteContribuyentes(id);
  }
}
