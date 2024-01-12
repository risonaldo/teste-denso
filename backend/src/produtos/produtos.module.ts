/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './controllers/produtos.controller';
import { Produto } from './models/entities/produto.entity';
import { ProdutosService } from './services/produtos.service';
import { CategoriasModule } from 'src/categorias/categorias.module';
import { Categoria } from 'src/categorias/models/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria]), JwtModule, CategoriasModule],
  controllers: [ProdutosController],
  providers: [ProdutosService, JwtService],
})
export class ProdutosModule {}
