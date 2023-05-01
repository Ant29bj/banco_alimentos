import { ApiProperty } from "@nestjs/swagger";
import { Empleado } from "src/empleado/empleado.entity";

export class RolData {
    @ApiProperty({
        description: 'Descripcion del Rol',
    })
    descripcion: string;


}