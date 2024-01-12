/* eslint-disable prettier/prettier */
import { Categoria } from 'src/categorias/models/entities/categoria.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({database: 'denso', name: 'produtos'})
export class Produto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'int'})
  partNumber: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto)
  @JoinColumn({ name: 'categoria_id'})
  categoria: Categoria;
}
