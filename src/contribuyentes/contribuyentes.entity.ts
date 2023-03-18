import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "contribuyentes" })
export class Contribuyentes extends GenericEntity {
    @Column()
    id_contribuyentes: number;

    @Column({ length: 255 })
    descripcion: string;

    @Column({ length: 10 })
    telefono: string;

    @Column()
    direccion: string;

    @Column({ length: 13 })
    rfc: string;

}

/*id_contribuyente
descripcion 255
telefono 13
direccion string
rfc 13 unica */