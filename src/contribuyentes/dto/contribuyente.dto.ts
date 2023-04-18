import { ApiProperty } from '@nestjs/swagger';
import { Almacen } from 'src/almacen/almacen.entity';

export class contribuyente {
  @ApiProperty({
    description: 'description general del contribuyente',
  })
  descripcion: string;

  @ApiProperty({
    description: 'Telefono del contribuyente',
  })
  telefono?: string;

  @ApiProperty({
    description: 'Direccion del contribuyente',
  })
  direccion: string;

  @ApiProperty({
    description: 'RFC de 13 caracteres del contribuyente',
  })
  rfc: string;

  @ApiProperty({
    description: 'Lista de productos de contribucion',
  })
  producto: Almacen[];
}
