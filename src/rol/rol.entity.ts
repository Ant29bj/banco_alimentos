import { Entity, Column, OneToMany } from 'typeorm';
import { GenericEntity } from 'src/generics/generic.entity';
import { Empleado } from 'src/empleado/empleado.entity';

@Entity()
export class Rol extends GenericEntity {
  @OneToMany(() => Empleado, (empleado) => empleado.id_rol)
  id_rol: Empleado;

  @Column({ type: 'varchar', length: 100 })
  descripcion: string;
}
