import { ApiProperty } from '@nestjs/swagger';

export class SalidaData {
  @ApiProperty({
    description: 'Clave del producto en almacen',
  })
  clave_producto: string;

  @ApiProperty({
    description: 'titulo',//corregir
  })
  titulo: string;

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

  @ApiProperty({
    description: 'Concepto',//corregir
  })
  concepto: string;

}
