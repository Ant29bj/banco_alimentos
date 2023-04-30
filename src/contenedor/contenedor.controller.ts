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
import { Contenedor } from './contenedor.entity';
import { ContenedorService } from './contenedor.service';
import { ContenedorData } from './dto/contenedor.dto';

@Controller('contenedor')
@ApiTags('contenedor')
export class ContenedorController extends GenericController<
  Contenedor,
  ContenedorService
> {
  constructor(private readonly contenedorService: ContenedorService) {
    super(contenedorService);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBearerAuth()
  @ApiBody({ type: ContenedorData, required: true })
  async create(@Body() entity: ContenedorData) {
    return this.contenedorService.create(entity);
  }

}
