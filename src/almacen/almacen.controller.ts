import { Body, Controller, Post } from '@nestjs/common';
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

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBearerAuth()
  @ApiBody({ type: AlmacenData, required: true })
  async create(@Body() entity: AlmacenData) {
    return this.almacenService.create(entity);
  }
}
