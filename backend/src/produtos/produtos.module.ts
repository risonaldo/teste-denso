/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasService } from 'src/categorias/services/categorias.service';
import { ProdutosController } from './controllers/produtos.controller';
import { Produto } from './models/entities/produto.entity';
import { ProdutosService } from './services/produtos.service';
import { Categoria } from 'src/categorias/models/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), JwtModule, Categoria],
  controllers: [ProdutosController],
  providers: [ProdutosService, JwtService, CategoriasService],
})
export class ProdutosModule {}
