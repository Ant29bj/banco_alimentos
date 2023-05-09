import { Almacen } from 'src/almacen/almacen.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Rol } from 'src/rol/rol.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('empleado')
export class Empleado extends GenericEntity {
  @Column()
  nombre: string;

  @OneToMany(() => Almacen, (producto) => producto.recibio)
  producto: Almacen[];


  @ManyToOne(() => Rol, (rol) => rol.empleado, { cascade: true })
  rolId: Rol;
}
