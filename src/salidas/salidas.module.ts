import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalidasController } from './salidas.controller';
import { SalidasService } from './salidas.service';
import { Salida } from './salidas.entity';
import { AlmacenModule } from 'src/almacen/almacen.module';
import { AlmacenData } from 'src/almacen/dto/almacen.dto';
import { AlmacenController } from 'src/almacen/almacen.controller';

@Module({
  imports: [AlmacenModule, AlmacenData, TypeOrmModule.forFeature([Salida])],
  controllers: [AlmacenController, SalidasController],
  providers: [SalidasService, AlmacenController],
})
export class SalidasModule { }
