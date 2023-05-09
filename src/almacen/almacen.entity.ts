import { Contribuyentes } from 'src/contribuyentes/contribuyentes.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Producto } from 'src/producto/producto.entity';
import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'almacen' })
export class Almacen extends GenericEntity {
  @Column({ unique: true })
  folio: number;

  @Column({ type: 'double precision' })
  kilogramos: number;

  @Column({ type: 'double precision' })
  importe: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_entrada: Date;

  @ManyToOne(() => Empleado, (empleado) => empleado.id)
  recibio: Empleado;

  @ManyToOne(() => Contribuyentes, (contribuyente) => contribuyente.producto)
  contribuyente: Contribuyentes;

  @ManyToOne(() => Producto, (product) => product.codigo_sat)
  clave_producto: Producto;
}
