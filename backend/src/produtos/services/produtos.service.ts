/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../models/entities/produto.entity';
import { CreateProdutoDto } from '../models/dto/create-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}
  async create(produto: CreateProdutoDto): Promise<Produto> {
    const nomeProduto = await this.produtoRepository.findOne({
      where: produto,
      relations: ['categorias']
    });

    if (nomeProduto) {
      throw new HttpException(
        `A Produto ${produto.partNumber} já existe`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const novaProduto = await this.produtoRepository.save(produto);

    return novaProduto;
  }

  async findAll(): Promise<Produto[]> {
    const categoria = await this.produtoRepository.find();
    return categoria;
  }

  async remove(id: number) {
    const nomeCategoria = await this.produtoRepository.findOne({
      where: { id: id },
    });

    if (!nomeCategoria) {
      throw new HttpException(
        `A categoria com ${id} não existe`,
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.produtoRepository.delete(id);
    return { message: 'Categoria removida com sucesso' };
  }
}
