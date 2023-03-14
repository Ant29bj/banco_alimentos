import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('contenedor')
export class Contenedor extends GenericEntity {
  @Column()
  descripcion: string;

  @Column()
  peso: number;
}
