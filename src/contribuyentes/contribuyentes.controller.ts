import { Controller } from '@nestjs/common';
import { GenericController } from '../generics/generic.controller';
import { Contribuyentes } from './contribuyentes.entity';
import { ContribuyentesService } from './contribuyentes.service';

@Controller('contribuyentes')
export class ContribuyentesController extends GenericController<Contribuyentes,
    ContribuyentesService>
{
    constructor(private readonly contribuyentesService: ContribuyentesService) {
        super(contribuyentesService);
    }
}
