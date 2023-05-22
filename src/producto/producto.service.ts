import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService extends GenericService<Producto> {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {
    super(productoRepository);
  }
  getProducto() {
    return this.productoRepository.find({});
  }

  getProductoId(id: number) {
    return this.productoRepository.findOne({
      where: { id },
    });
  }

  updateProducto(id: number, data: Producto) {
    return this.productoRepository.update({ id }, data);
  }
}
