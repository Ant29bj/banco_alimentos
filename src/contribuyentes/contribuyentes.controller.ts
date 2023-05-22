import {
  Body,
  Controller,
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
  getContribuyentes() {
    return this.contribuyentesService.getContribuyente();
  }

  @Get(':id')
  getEmpleadosId(@Param('id', ParseIntPipe) id: number) {
    return this.contribuyentesService.getContribuyenteId(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBasicAuth()
  @ApiBody({ type: ContribuyentesData, required: true })
  async create(@Body() entity: ContribuyentesData) {
    return this.contribuyentesService.create(entity);
  }

  @Patch(':id')
  updateAlmacen(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Contribuyentes,
  ) {
    return this.contribuyentesService.updateContribuyente(id, data);
  }
}
