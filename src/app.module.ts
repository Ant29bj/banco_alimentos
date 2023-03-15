import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenedorModule } from './contenedor/contenedor.module';
import { DatabaseSetUp } from './setup/setup.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseSetUp,
    }),
    ContenedorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
