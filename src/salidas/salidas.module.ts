import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalidasController } from './salidas.controller';
import { SalidasService } from './salidas.service';
import { Salida } from './salidas.entity';
import { AlmacenModule } from 'src/almacen/almacen.module';

@Module({
  imports: [AlmacenModule, TypeOrmModule.forFeature([Salida])],
  controllers: [SalidasController],
  providers: [SalidasService]
})
export class SalidasModule {}
