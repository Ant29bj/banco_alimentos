import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { Contribuyentes } from './contribuyentes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContribuyentesData } from './dto/contribuyentes.dto';

@Injectable()
export class ContribuyentesService extends GenericService<Contribuyentes> {
    constructor(
        @InjectRepository(Contribuyentes)
        private readonly contribuyentesRepository: Repository<Contribuyentes>,
    ) {
        super(contribuyentesRepository);
    }

    getContribuyentes() {
        return this.contribuyentesRepository.find({});
    }

    async getContribuyentesId(id: number) {
        const contribuyentesFound = await this.contribuyentesRepository.findOne({
            where: { id },
        });

        if (!contribuyentesFound) {
            return new HttpException(
                'Contribuyentes no encontrado',
                HttpStatus.NOT_FOUND,
            );
        }

        return contribuyentesFound;
    }

    async createContribuyentes(contribuyentes: ContribuyentesData) {
        const contribuyentesFound = await this.contribuyentesRepository.findOne({
            where: {
                rfc: contribuyentes.rfc,
            },
        });

        if (contribuyentesFound) {
            return new HttpException(
                'El Contribuyentes ya existe',
                HttpStatus.CONFLICT,
            );
        }

        const newContribuyentes =
            this.contribuyentesRepository.create(contribuyentes);
        return this.contribuyentesRepository.save(newContribuyentes);
    }

    async deleteContribuyentes(id: number) {
        const contribuyentesFound = await this.contribuyentesRepository.findOne({
            where: {
                id,
            },
        });

        if (!contribuyentesFound) {
            return new HttpException(
                'Contribuyentes no encontrado',
                HttpStatus.NOT_FOUND,
            );
        }

        return this.contribuyentesRepository.delete({ id });
    }

    async updateContribuyentes(id: number, contribuyentes: ContribuyentesData) {
        const contribuyentesFound = await this.contribuyentesRepository.findOne({
            where: {
                id,
            },
        });

        if (!contribuyentesFound) {
            return new HttpException(
                'Contribuyentes no encontrado',
                HttpStatus.NOT_FOUND,
            );
        }

        const updateContribuyentes = Object.assign(
            contribuyentesFound,
            contribuyentes,
        );

        return this.contribuyentesRepository.save(updateContribuyentes);
    }
}
