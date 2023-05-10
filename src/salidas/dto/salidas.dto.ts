import { ApiProperty } from '@nestjs/swagger';
import { Almacen } from 'src/almacen/almacen.entity';

export class SalidaData {
  @ApiProperty({
    description: 'Clave del producto en almacen',
  })
  clave_producto: Almacen;

  @ApiProperty({
    description: 'Fecha de la salida',
  })
  fecha: Date;

  @ApiProperty({
    description: 'Peso de la salida',
  })
  peso: number;

  @ApiProperty({
    description: 'Destinatario de la salida',
  })
  destinatario: string;

  @ApiProperty({
    description: 'Observaciones de la salida',
  })
  observaciones: string;
}
