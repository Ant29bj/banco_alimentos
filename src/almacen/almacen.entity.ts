import { Contribuyentes } from 'src/contribuyentes/contribuyentes.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Producto } from 'src/producto/producto.entity';
import { Salida } from 'src/salidas/salidas.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

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
  recibioId: Empleado;

  @ManyToOne(() => Contribuyentes, (contribuyente) => contribuyente.producto)
  contribuyente: Contribuyentes;

  @ManyToOne(() => Producto, (product) => product.codigo_sat)
  clave_producto: Producto;

  @OneToMany(() => Salida, (salida) => salida.clave_producto)
  salida_producto: Salida[];
}
