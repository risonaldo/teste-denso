/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IRetorno } from 'src/IRetorno';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from '../models/dto/create-categoria.dto';
import { Categoria } from '../models/entities/categoria.entity';
import { response } from 'express';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(categoria: CreateCategoriaDto): Promise<Categoria> {
    const nomeCategoria = await this.categoriaRepository.findOne({
      where: categoria,
    });

    if (nomeCategoria) {
      throw new HttpException(
        `A categoria ${categoria.nome} já existe`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const novaCategoria = await this.categoriaRepository.save(categoria);

    return novaCategoria;
  }

  async findAll(): Promise<Categoria[]> {
    const categoria = await this.categoriaRepository.find();
    return categoria;
  }

  async remove(id: number) {
    const nomeCategoria = await this.categoriaRepository.findOne({
      where: {id: id},
    });

    if (!nomeCategoria) {
      throw new HttpException(
        `A categoria com ${id} não existe`,
        HttpStatus.BAD_REQUEST,
      );
    }
    
    await this.categoriaRepository.delete(id);
    return { message: 'Categoria removida com sucesso' };
  }
}
