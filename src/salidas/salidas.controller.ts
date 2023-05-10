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
import { Salida } from './salidas.entity';
import { SalidasService } from './salidas.service';
import { SalidaData } from './dto/salidas.dto';

@Controller('salidas')
@ApiTags('salidas')
export class SalidasController extends GenericController<Salida,SalidasService> {
    constructor(private readonly salidasService: SalidasService) {
        super(salidasService);
      }
    
    @Post()
    @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
    @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
    @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
    @ApiBasicAuth()
    @ApiBody({ type: SalidaData, required: true })
    async create(@Body() entity: Salida) {
        return this.salidasService.create(entity);
    }
}
