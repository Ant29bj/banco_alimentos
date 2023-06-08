import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenedorModule } from './contenedor/contenedor.module';
import { DatabaseSetUp } from './setup/setup.service';
import { RolModule } from './rol/rol.module';
import { ContribuyentesModule } from './contribuyentes/contribuyentes.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ProductoModule } from './producto/producto.module';
import { AlmacenModule } from './almacen/almacen.module';
import { SalidasModule } from './salidas/salidas.module';
import { DataImportModule } from './data/data-import.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseSetUp,
    }),
    ContenedorModule,
    RolModule,
    ContribuyentesModule,
    AlmacenModule,
    EmpleadoModule,
    ProductoModule,
    SalidasModule,
    DataImportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
