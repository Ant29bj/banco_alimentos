import { ApiProperty } from "@nestjs/swagger";

export class ProductoData {

    @ApiProperty({
        description: 'Descripcion del productos',
    })
    descripcion: string;

    @ApiProperty({
        description: 'Codigo del sat',
    })
    codigo_sat: number;
    @ApiProperty({
        description: 'Codigo identificador de producto en el almacen',
    })
    clave_producto?: string;


}