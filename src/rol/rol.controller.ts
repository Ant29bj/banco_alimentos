import { Controller } from "@nestjs/common";
import { GenericController } from "src/generics/generic.controller";
import { Rol } from './rol.entity';
import { RolService } from './rol.service' ;

@Controller('rol')
export class RolController extends GenericController<
  Rol,
  RolService
> {
    constructor(private readonly rolService: RolService) {
        super(rolService);
    }
}