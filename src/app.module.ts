import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenedorModule } from './contenedor/contenedor.module';
import { DatabaseSetUp } from './setup/setup.service';
import { AlmacenModule } from './almacen/almacen.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseSetUp,
    }),
    ContenedorModule,
    AlmacenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
