import { Module } from '@nestjs/common';
import { ContribuyentesService } from './contribuyentes.service';
import { ContribuyentesController } from './contribuyentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contribuyentes } from './contribuyentes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contribuyentes])],
  providers: [ContribuyentesService],
  controllers: [ContribuyentesController]
})
export class ContribuyentesModule { }
