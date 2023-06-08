import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';
import { RolData } from './dto/rol.dto';

@Injectable()
export class RolService extends GenericService<Rol> {
    constructor(@InjectRepository(Rol) private rolRepository: Repository<Rol>) {
        super(rolRepository);
    }

    getRoles() {
        return this.rolRepository.find({});
    }

    async getRolId(id: number) {
        const rolFound = await this.rolRepository.findOne({
            where: { id },
        });

        if (!rolFound) {
            return new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
        }

        return rolFound;
    }

    async createRol(rol: RolData) {
        const rolFound = await this.rolRepository.findOne({
            where: {
                descripcion: rol.descripcion,
            },
        });

        if (rolFound) {
            return new HttpException('El Rol ya existe', HttpStatus.CONFLICT);
        }

        const newRol = this.rolRepository.create(rol);
        return this.rolRepository.save(newRol);
    }

    async deleteRol(id: number) {
        const rolFound = await this.rolRepository.findOne({
            where: {
                id,
            },
        });

        if (!rolFound) {
            return new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
        }

        return this.rolRepository.delete({ id });
    }

    async updateRol(id: number, rol: RolData) {
        const rolFound = await this.rolRepository.findOne({
            where: {
                id,
            },
        });

        if (!rolFound) {
            return new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
        }

        const updateRol = Object.assign(rolFound, rol);

        return this.rolRepository.save(updateRol);
    }
}
