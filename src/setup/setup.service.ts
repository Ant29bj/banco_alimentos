import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseSetUp implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Saul.123',
      database: 'manejador',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], //__dirname + './entities/*.entity.ts
      synchronize: true,
    };
  }
}
