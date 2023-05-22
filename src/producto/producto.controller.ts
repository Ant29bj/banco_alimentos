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

  @Get()
  getContribuyentes() {
    return this.productoService.getProducto();
  }

  @Get(':id')
  getEmpleadosId(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.getProductoId(id);
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

  @Patch(':id')
  updateAlmacen(@Param('id', ParseIntPipe) id: number, @Body() data: Producto) {
    return this.productoService.updateProducto(id, data);
  }
}
