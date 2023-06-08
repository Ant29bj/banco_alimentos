import { ApiProperty } from "@nestjs/swagger";
import { Almacen } from "src/almacen/almacen.entity";
export class ProductoData {

    @ApiProperty({
        description: 'Descripcion del productos',
    })
    descripcion: string;

    @ApiProperty({
        description: 'Codigo del sat',
    })
    codigo_sat: string;

    @ApiProperty({
        description: 'Si es perecedero o no',
    })
    tipo: string;
}