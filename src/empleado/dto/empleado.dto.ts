import { ApiProperty } from "@nestjs/swagger";
import { Almacen } from "src/almacen/almacen.entity";
import { Rol } from "src/rol/rol.entity";

export class EmpleadoData {
    @ApiProperty({
        description: 'Nombre del empleado',
    })
    nombre: string;

    @ApiProperty({
        description: 'Id del rol del empleado',
    })
    rolId: Rol;
}