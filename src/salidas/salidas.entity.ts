import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Almacen } from '../almacen/almacen.entity';
import { GenericEntity } from 'src/generics/generic.entity';

@Entity()
export class Salida extends GenericEntity{
  @PrimaryGeneratedColumn()
  folio_salida: number;

  @Column({ length: 20 })
  clave_producto: string;

  @ManyToOne(() => Almacen, almacen => almacen.clave_producto)
  almacen: Almacen;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'real' })
  peso: number;

  @Column({ length: 255 })
  destinatario: string;

  @Column({ length: 255 })
  observaciones: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  salida: Date;
}
