/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateCategoriaDto } from '../models/dto/create-categoria.dto';
import { CategoriasService } from '../services/categorias.service';
import { AuthGuard } from 'src/usuarios/auth/auth.guard';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.categoriasService.findAll();
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
