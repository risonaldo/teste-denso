/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      database: 'denso',
      username: 'root',
      password: 'root',
      host: 'localhost',
      port: 3306,
      synchronize: false,
      type: 'mysql',
      entities: [join(__dirname, '..', '**/*entity{.js,.ts}')],
      migrations: [join(__dirname, '..', './database/migrations/*{.js,.ts}')],
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
