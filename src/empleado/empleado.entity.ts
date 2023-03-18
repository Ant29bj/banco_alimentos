import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('empleado')
export class Empleado extends GenericEntity {
  @Column()
  nombre: string;

  @Column()
  id_rol: number;
}