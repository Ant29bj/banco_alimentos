import { ApiProperty } from '@nestjs/swagger';
import { Contribuyentes } from 'src/contribuyentes/contribuyentes.entity';
import { Empleado } from 'src/empleado/empleado.entity';
import { Producto } from 'src/producto/producto.entity';

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
  recibio: Empleado;

  @ApiProperty({
    description: 'Descripcion de persona que dono el cargamento',
    default: 'anonimo',
  })
  contribuyente: Contribuyentes;

  @ApiProperty({
    description: 'Clave de los productos del cargamento',
  })
  clave_producto: Producto;
}
