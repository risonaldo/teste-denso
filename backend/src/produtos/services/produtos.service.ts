/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasService } from 'src/categorias/services/categorias.service';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from '../models/dto/create-produto.dto';
import { Produto } from '../models/entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
    // private readonly categoriaService: CategoriasService
  ) {}
  async create(produto: CreateProdutoDto): Promise<Produto> {
    const nomeProduto = await this.produtoRepository.findOne({
      where: produto,
      relations: ['categorias'],
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
    const nomeProduto = await this.produtoRepository.findOne({
      where: { id: id },
    });

    if (!nomeProduto) {
      throw new HttpException(
        `O Produto com ${id} não existe`,
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.produtoRepository.delete(id);
    return { message: 'Produto removida com sucesso' };
  }
}
