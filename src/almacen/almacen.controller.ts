import { Controller } from '@nestjs/common';
import { Empleado } from 'src/entities/empleado.entity';
import { GenericController } from 'src/generics/generic.controller';
import { Almacen } from './almacen.entity';
import { AlmacenService } from './almacen.service';

@Controller('almacen')
export class AlmacenController extends GenericController<Almacen,AlmacenService> {
    constructor(private readonly almacenService: AlmacenService) {
        super(almacenService);
    }
}
