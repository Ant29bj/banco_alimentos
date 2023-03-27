import { Almacen } from 'src/almacen/almacen.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('producto')
export class Producto extends GenericEntity {
  @OneToMany(() => Almacen, (almacen) => almacen.clave_producto)
  clave_producto: Almacen;

  @Column()
  descripcion: string;

  @Column()
  codigo_sat: number;
}
