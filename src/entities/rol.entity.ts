import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Empleado } from './empleado.entity';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({ type: 'varchar', length: 100 })
  descripcion: string;

  @OneToMany(() => Empleado, empleado => empleado.id_rol)
  empleados: Empleado[];
}
