import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  @IsNotEmpty({ message: 'Campo obrigatório de nome da categoria' })
  nome: string;
}
