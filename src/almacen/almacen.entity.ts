import { GenericEntity } from 'src/generics/generic.entity';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Almacen extends GenericEntity {
  @PrimaryColumn({ type: 'char', length: 20 })
  clave_producto: string;

  @Column({ unique: true })
  folio: number;

  @Column({ type: 'double precision' })
  piezas: number;

  @Column({ type: 'double precision' })
  importe: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_entrada: Date;

  @Column()
  recibio: number;

  @Column()
  contribuyente: number;
}
