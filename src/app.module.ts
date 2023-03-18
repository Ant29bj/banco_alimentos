import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenedorModule } from './contenedor/contenedor.module';
import { DatabaseSetUp } from './setup/setup.service';
import { EmpleadoModule } from './empleado/empleado.module';
import { ProductoModule } from './producto/producto.module';
import { AlmacenModule } from './almacen/almacen.module';
// aqui hay que hacer el import de las entidades o donde sea necesario
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseSetUp,
    }),
    ContenedorModule,
    AlmacenModule,
    EmpleadoModule,
    ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
