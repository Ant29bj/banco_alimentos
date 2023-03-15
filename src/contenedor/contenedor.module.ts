import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenedorController } from './contenedor.controller';
import { Contenedor } from './contenedor.entity';
import { ContenedorService } from './contenedor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contenedor])],
  controllers: [ContenedorController],
  providers: [ContenedorService],
})
export class ContenedorModule {}
