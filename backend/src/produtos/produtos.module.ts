/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProdutosService } from './services/produtos.service';
import { ProdutosController } from './controllers/produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './models/entities/produto.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), JwtModule],
  controllers: [ProdutosController],
  providers: [ProdutosService, JwtService],
})
export class ProdutosModule {}
