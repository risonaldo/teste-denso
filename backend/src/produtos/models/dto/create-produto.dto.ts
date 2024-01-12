/* eslint-disable prettier/prettier */
import { Categoria } from 'src/categorias/models/entities/categoria.entity';

export class CreateProdutoDto {
  id: number;

  partNumber: string;

  categoria: Categoria;
}
