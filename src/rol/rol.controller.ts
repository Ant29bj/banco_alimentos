import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Rol } from './rol.entity';
import { RolService } from './rol.service';
import { RolData } from './dto/rol.dto';

@Controller('rol')
@ApiTags('roles')
export class RolController extends GenericController<Rol, RolService> {
  constructor(private readonly rolService: RolService) {
    super(rolService);
  }

  @Get()
  getRoles() {
    return this.rolService.getRoles();
  }
  @Get(':id')
  getRolId(@Param('id', ParseIntPipe) id: number) {
    return this.rolService.getRolId(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Se creo satisfactoriamente!' })
  @ApiUnprocessableEntityResponse({ description: 'Error de peticion' })
  @ApiForbiddenResponse({ description: 'Peticion sin autorizacion' })
  @ApiBasicAuth()
  @ApiBody({ type: RolData, required: true })
  async createRol(@Body() entity: RolData) {
    return this.rolService.createRol(entity);
  }

  @Patch(':id')
  updatePaciente(@Param('id', ParseIntPipe) id: number, @Body() data: RolData) {
    return this.rolService.updateRol(id, data);
  }

  @Delete(':id')
  deletePaciente(@Param('id', ParseIntPipe) id: number) {
    return this.rolService.deleteRol(id);
  }
}
