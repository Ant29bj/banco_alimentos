import { ApiProperty } from '@nestjs/swagger';

export class AlmacenData {
  @ApiProperty({
    description: 'Numero de transaccion',
  })
  folio: number;

  @ApiProperty({
    description: 'Peso en kilogramos del producto',
  })
  kilogramos: number;

  @ApiProperty({
    description: 'Importe asignado al cargamento',
  })
  importe: number;

  @ApiProperty({
    description: 'Fecha de ingreso del cargamento',
  })
  fecha_entrada: Date;

  @ApiProperty({
    description: 'Numero de empleado(s) que recibieron el cargamento',
  })
  recibio: number;

  @ApiProperty({
    description: 'Descripcion de persona que dono el cargamento',
    default: 'anonimo',
  })
  contribuyentes?: string;

  @ApiProperty({
    description: 'Clave de los productos del cargamento',
  })
  clave_producto: string;
}
