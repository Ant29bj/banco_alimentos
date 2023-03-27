import { Contribuyentes } from 'src/contribuyentes/contribuyentes.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Producto } from 'src/producto/producto.entity';
import { Entity, Column, ManyToOne, ManyToMany } from 'typeorm';

@Entity({ name: 'almacen' })
export class Almacen extends GenericEntity {
  @ManyToOne(() => Producto, (product) => product.codigo_sat)
  clave_producto: Producto[];

  @Column({ unique: true })
  folio: number;

  @Column({ type: 'double precision' })
  piezas: number;

  @Column({ type: 'double precision' })
  importe: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_entrada: Date;

  @ManyToMany(() => Empleado, (empleado) => empleado.id)
  recibio: Empleado[];

  @ManyToOne(() => Contribuyentes, (contribuyente) => contribuyente.producto)
  contribuyente: Contribuyentes;
}
