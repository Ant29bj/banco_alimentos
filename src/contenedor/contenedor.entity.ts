import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('contenedor')
export class Contenedor extends GenericEntity {

  @Column()
  @ApiProperty({
    description: 'Contenido del contenedor',
  })
  descripcion: string;

  @Column()
  @ApiProperty({
    description: 'Peso del contenedor',
  })
  peso: number;
}
