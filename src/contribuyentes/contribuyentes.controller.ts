import { Body, Controller, Post } from '@nestjs/common';
import { ApiBasicAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from '../generics/generic.controller';
import { Contribuyentes } from './contribuyentes.entity';
import { ContribuyentesService } from './contribuyentes.service';
import { contribuyente } from './dto/contribuyente.dto';

@Controller('contribuyentes')
@ApiTags('contribuyentes')
export class ContribuyentesController extends GenericController<
  Contribuyentes,
  ContribuyentesService
> {
  constructor(private readonly contribuyentesService: ContribuyentesService) {
    super(contribuyentesService);
  }

  @Post()
  @ApiBasicAuth()
  @ApiBody({ type: contribuyente, required: true })
  async create(@Body() entity: contribuyente) {
    return this.contribuyentesService.create(entity);
  }
}
