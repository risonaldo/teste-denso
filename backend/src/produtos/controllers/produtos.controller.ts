/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards
} from '@nestjs/common';
import { CreateProdutoDto } from '../models/dto/create-produto.dto';
import { ProdutosService } from '../services/produtos.service';
import { AuthGuard } from 'src/usuarios/auth/auth.guard';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.produtosService.findAll();
  }
  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
