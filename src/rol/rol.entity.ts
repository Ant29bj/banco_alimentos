import {
  Entity,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { GenericEntity } from 'src/generics/generic.entity';
import { Empleado } from 'src/empleado/empleado.entity';

@Entity()
export class Rol extends GenericEntity {
  @Column({ type: 'varchar', length: 100 })
  descripcion: string;

  @OneToMany(() => Empleado, (empleado) => empleado.rolId)
  empleado: Empleado[];
}
