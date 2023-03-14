import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contenedor {
  @PrimaryGeneratedColumn()
  id_contenedor: number;

  @Column({ type: 'varchar', length: 255 })
  descripcion: string;

  @Column({ type: 'real' })
  peso: number;
}
