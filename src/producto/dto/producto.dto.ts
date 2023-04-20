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
    codigo_sat: number;
    @ApiProperty({
        description: 'Codigo identificador de producto en el almacen',
    })
    clave_producto?: Almacen;


}