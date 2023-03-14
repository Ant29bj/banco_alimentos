import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Almacen } from './almacen.entity';

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id_empleado: number;

  @Column({ type: 'char', length: 255 })
  nombre: string;

  @Column()
  id_rol: number;

  @OneToMany(() => Almacen, almacen => almacen.recibio)
  almacenes: Almacen[];
}
