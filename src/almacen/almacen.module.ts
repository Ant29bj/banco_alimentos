import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlmacenController } from './almacen.controller';
import { Almacen } from './almacen.entity';
import { AlmacenService } from './almacen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Almacen])],
  controllers: [AlmacenController],
  providers: [AlmacenService],
  exports: [AlmacenService],
})
export class AlmacenModule { }
