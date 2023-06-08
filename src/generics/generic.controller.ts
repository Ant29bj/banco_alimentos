import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindManyOptions } from 'typeorm';
import { GenericEntity } from './generic.entity';
import { GenericService } from './generic.service';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

export abstract class GenericController<
  Entity extends GenericEntity,
  Service extends GenericService<Entity>,
> {
  constructor(private readonly service: Service) { }


  // @Post()
  // @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  // @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  // @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  // async create(@Body() entity: Entity) {
  //   return this.service.create(entity);
  // }

  // @Get()
  // @ApiOkResponse({ description: 'Se obtuvieron con exito los datos' })
  // @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  // async find(@Query() options?: FindManyOptions<Entity>) {
  //   return this.service.find({ ...options });
  // }

  // @Get(':id')
  // @ApiOkResponse({ description: 'Se obtuvo con exito el dato' })
  // @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  // @ApiNotFoundResponse({ description: 'Dato no encontrado' })
  // async findOne(@Param('id') id: number) {
  //   return this.service.findOneById(id);
  // }

  // @Put(':id')
  // @Patch(':id')
  // @ApiOkResponse({ description: 'Se actualizo con exito el dato ' })
  // @ApiNotFoundResponse({ description: 'Dato no encontrado' })
  // @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  // @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  // async update(@Param('id') id: number, @Body() entity: Entity) {
  //   if (id != entity.id) return;
  //   return this.service.update(id, entity);
  // }

  // @Delete(':id')
  // @ApiOkResponse({ description: 'Se elimino con exito el dato' })
  // @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  // @ApiNotFoundResponse({ description: 'Dato no encontrado' })
  // async delete(@Param('id') id: number) {
  //   return this.service.delete(id);
  // }
}
