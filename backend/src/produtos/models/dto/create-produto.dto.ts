/* eslint-disable prettier/prettier */
import { Categoria } from 'src/categorias/models/entities/categoria.entity';

export class CreateProdutoDto {
  partNumber: string;
  categoria_id:number
  categoria: Categoria;
}
