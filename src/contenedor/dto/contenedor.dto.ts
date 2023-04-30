import { ApiProperty } from '@nestjs/swagger';

export class ContenedorData {
    @ApiProperty({
        description: 'Contenido del contenedor',
    })
    descripcion: string;

    @ApiProperty({
        description: 'Peso del contenedor',
    })
    peso: number;
}