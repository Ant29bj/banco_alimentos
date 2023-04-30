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
import { Producto } from './producto.entity';
import { ProductoService } from './producto.service';
import { ProductoData } from './dto/producto.dto';

@Controller('producto')
@ApiTags('productos')
export class ProductoController extends GenericController<
  Producto,
  ProductoService
> {
  constructor(private readonly productoService: ProductoService) {
    super(productoService);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBasicAuth()
  @ApiBody({ type: ProductoData, required: true })
  async create(@Body() entity: ProductoData) {
    return this.productoService.create(entity);
  }
}
