import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseSetUp } from './setup/setup.service';
// aqui hay que hacer el import de las entidades o donde sea necesario
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseSetUp,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
