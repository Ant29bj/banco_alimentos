import { Entity, Column} from 'typeorm';
import { GenericEntity } from 'src/generics/generic.entity'

@Entity()
export class Rol extends GenericEntity {
 @Column()
  id_rol: number;

  @Column({ type: 'varchar', length: 100 })
  descripcion: string;


}