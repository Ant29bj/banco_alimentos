import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Producto } from './producto.entity';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController extends GenericController<
  Producto,
  ProductoService
> {
  constructor(private readonly productoService: ProductoService) {
    super(productoService);
  }

}
