import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService extends GenericService<Producto> {
  constructor(
    @InjectRepository(Producto) productoRepository: Repository<Producto>,
  ) {
    super(productoRepository);
  }
  
}
