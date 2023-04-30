import { ApiProperty } from "@nestjs/swagger";

export class RolData {
    @ApiProperty({
        description: 'Descripcion del ROl',
    })
    descripcion: string;

    @ApiProperty({
        description: 'Identificador del empleado',
    })
    id_rol: string;
}