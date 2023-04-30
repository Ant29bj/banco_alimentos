import { Almacen } from 'src/almacen/almacen.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('producto')
export class Producto extends GenericEntity {
  @Column()
  descripcion: string;

  @Column()
  codigo_sat: number;

  @OneToMany(() => Almacen, (almacen) => almacen.clave_producto)
  clave_producto: Almacen;



}
