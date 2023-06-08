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
import { GenericController } from 'src/generics/generic.controller';
import { Salida } from './salidas.entity';
import { SalidasService } from './salidas.service';
import { SalidaData } from './dto/salidas.dto';

@Controller('salidas')
@ApiTags('salidas')
export class SalidasController extends GenericController<
  Salida,
  SalidasService
> {
  constructor(private readonly salidasService: SalidasService) {
    super(salidasService);
  }

  @Get()
  getRoles() {
    return this.salidasService.getSalidas();
  }
  @Get(':id')
  getRolId(@Param('id', ParseIntPipe) id: number) {
    return this.salidasService.getSalidaId(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBasicAuth()
  @ApiBody({ type: SalidaData, required: true })
  async createSalida(@Body() entity: Salida) {
    return this.salidasService.createSalida(entity);
  }

  @Patch(':id')
  updatePaciente(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: SalidaData,
  ) {
    return this.salidasService.updateSalida(id, data);
  }

  @Delete(':id')
  deletePaciente(@Param('id', ParseIntPipe) id: number) {
    return this.salidasService.deleteSalida(id);
  }
}
