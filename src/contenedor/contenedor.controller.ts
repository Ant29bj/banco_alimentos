import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Contenedor } from './contenedor.entity';
import { ContenedorService } from './contenedor.service';

@Controller('contenedor')
export class ContenedorController extends GenericController<
  Contenedor,
  ContenedorService
> {
  constructor(private readonly contenedorService: ContenedorService) {
    super(contenedorService);
  }
}
