import { ApiProperty } from "@nestjs/swagger";
import { Empleado } from "src/empleado/empleado.entity";


export class RolData {
    @ApiProperty({
        description: 'Descripcion del ROl',
    })
    descripcion: string;

    @ApiProperty({
        description: 'Identificador del empleado',
    })
    id_rol: Empleado;
}