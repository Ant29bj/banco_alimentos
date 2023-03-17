import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
//import { Almacen } from '../almacen/almacen.entity';

@Entity()
export class CatalogoProductos {
  @PrimaryColumn({ type: 'char', length: 20 })
  clave_producto: string;

  @Column({ type: 'char', length: 50 })
  descripcion: string;

  @Column()
  codigo_sat: number;

  //@OneToMany(() => Almacen, almacen => almacen.clave_producto)
  //almacenes: Almacen[];
}
