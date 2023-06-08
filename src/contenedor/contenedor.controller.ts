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

  @Get()
  getEmpleados() {
    return this.contenedorService.getContenedor();
  }
  @Get(':id')
  getEmpleadosId(@Param('id', ParseIntPipe) id: number) {
    return this.contenedorService.getContenedorId(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBearerAuth()
  @ApiBody({ type: ContenedorData, required: true })
  async createContenedor(@Body() entity: ContenedorData) {
    return this.contenedorService.createContenedor(entity);
  }

  @Patch(':id')
  updatePaciente(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ContenedorData,
  ) {
    return this.contenedorService.updateContenedor(id, data);
  }

  @Delete(':id')
  deletePaciente(@Param('id', ParseIntPipe) id: number) {
    return this.contenedorService.deleteContenedor(id);
  }
}
