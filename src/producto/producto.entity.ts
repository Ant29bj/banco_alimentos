import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('producto')
export class Producto extends GenericEntity {
  @Column({unique: true})
  clave_producto: string;

  @Column()
  descripcion: string;

  @Column()
  codigo_sat: number;
}