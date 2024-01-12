/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'denso', name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', length: 100 })
  email: string;
  @Column({ type: 'varchar' })
  senha: string;
}
