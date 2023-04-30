import { ApiProperty } from "@nestjs/swagger";

export class EmpleadoData {
    @ApiProperty({
        description: 'Nombre del empleado',
    })
    nombre: string;

    @ApiProperty({
        description: 'Id del rol del empleado',
    })
    id_rol: number;

    @ApiProperty({
        description: 'Producto que registro el empleado',
    })
    producto: string;
}