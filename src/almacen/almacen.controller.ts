import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Almacen } from './almacen.entity';
import { AlmacenService } from './almacen.service';
import { AlmacenData } from './dto/almacen.dto';

@Controller('almacen')
@ApiTags('almacen')
export class AlmacenController extends GenericController<
  Almacen,
  AlmacenService
> {
  constructor(private readonly almacenService: AlmacenService) {
    super(almacenService);
  }

  @Get()
  getEmpleados() {
    return this.almacenService.getAlmacen();
  }
  @Get(':id')
  getEmpleadosId(@Param('id', ParseIntPipe) id: number) {
    return this.almacenService.getAlmacenId(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBearerAuth()
  @ApiBody({ type: AlmacenData, required: true })
  async createAlmacen(@Body() entity: AlmacenData) {
    return this.almacenService.createAlmacen(entity);
  }

  @Patch(':id')
  updateAlmacen(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: AlmacenData,
  ) {
    return this.almacenService.updateAlmacen(id, data);
  }

  @Delete(':id')
  deleteAlmacen(@Param('id', ParseIntPipe) id: number) {
    return this.almacenService.deleteAlmacen(id);
  }


}
