import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { GenericEntity } from 'src/generics/generic.entity';
import { Almacen } from 'src/almacen/almacen.entity';

@Entity()
export class Salida extends GenericEntity {
  @Column({ length: 255 })
  folio_salida: string;

  @ManyToOne(() => Almacen, (almacen) => almacen.id)
  clave_producto: Almacen;

  @Column({ length: 255 })
  titulo: string;
  // falta hacer tabla de titulos de salidas para la integridad de datos
  @Column({ type: 'real' })
  peso: number;

  @Column({ length: 255 })
  destinatario: string;

  @Column({ length: 255 })
  observaciones: string;

  @Column({})
  concepto: string; //Falta hacer la tabla de conceptos
  /*
  @ManyToOne(() => Almacen, almacen => almacen.clave_producto)
  almacen: Almacen;*/
}
