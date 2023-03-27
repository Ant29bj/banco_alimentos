import { Almacen } from 'src/almacen/almacen.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Rol } from 'src/rol/rol.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity('empleado')
export class Empleado extends GenericEntity {
  @Column()
  nombre: string;

  @ManyToOne(() => Rol, (rol) => rol.id_rol)
  id_rol: Rol[];

  @ManyToMany(() => Almacen, (producto) => producto.recibio)
  @JoinTable()
  producto: Almacen[];
}
