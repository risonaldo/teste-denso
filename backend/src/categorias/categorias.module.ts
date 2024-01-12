/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoriasService } from './services/categorias.service';
import { CategoriasController } from './controllers/categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './models/entities/categoria.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), JwtModule],
  controllers: [CategoriasController],
  providers: [CategoriasService, JwtService],
})
export class CategoriasModule {}
