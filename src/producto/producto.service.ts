import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { ProductoData } from './dto/producto.dto';

@Injectable()
export class ProductoService extends GenericService<Producto> {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {
    super(productoRepository);
  }
  getProductos() {
    return this.productoRepository.find({});
  }

  async getProductoId(id: number) {
    const productoFound = await this.productoRepository.findOne({
      where: { id },
    });

    if (!productoFound) {
      return new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }

    return productoFound;
  }

  async createProducto(producto: ProductoData) {
    const productoFound = await this.productoRepository.findOne({
      where: { codigo_sat: producto.codigo_sat },
    });

    if (productoFound) {
      return new HttpException('El Producto ya existe', HttpStatus.CONFLICT);
    }

    const newProducto = this.productoRepository.create(producto);
    return this.productoRepository.save(newProducto);
  }

  async deleteProducto(id: number) {
    const productoFound = await this.productoRepository.findOne({
      where: {
        id,
      },
    });

    if (!productoFound) {
      return new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.productoRepository.delete({ id });
  }

  async updateProducto(id: number, producto: ProductoData) {
    const productoFound = await this.productoRepository.findOne({
      where: {
        id,
      },
    });

    if (!productoFound) {
      return new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }

    const updateProducto = Object.assign(productoFound, producto);

    return this.productoRepository.save(updateProducto);
  }
}
