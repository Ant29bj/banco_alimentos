import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Almacen } from '../almacen/almacen.entity';
import { GenericEntity } from 'src/generics/generic.entity';

@Entity()
export class Salida extends GenericEntity{
  @PrimaryGeneratedColumn()
  folio_salida: number;

  @Column({ length: 20 })
  clave_producto: string;

  @Column({length: 255})
  titulo: string;
  // falta hacer tabla de titulos de salidas para la integridad de datos
  @Column({ type: 'real' })
  peso: number;

  @Column({ length: 255 })
  destinatario: string;

  @Column({ length: 255 })
  observaciones: string;

  @Column({})
  concepto: string;//Falta hacer la tabla de conceptos
  /*
  @ManyToOne(() => Almacen, almacen => almacen.clave_producto)
  almacen: Almacen;*/
}
