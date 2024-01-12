/* eslint-disable prettier/prettier */
import { Produto } from 'src/produtos/models/entities/produto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ database: 'denso', name: 'categorias' })
export class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 128 })
  nome: string;

  @OneToMany(() => Produto, (produto) => produto.categorias)
  produtos: Produto[];
}
