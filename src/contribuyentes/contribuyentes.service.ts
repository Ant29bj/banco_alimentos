import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { Contribuyentes } from './contribuyentes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContribuyentesService extends GenericService<Contribuyentes> {
    constructor(
        @InjectRepository(Contribuyentes)
        private readonly contribuyentesRepository: Repository<Contribuyentes>,
    ) {
        super(contribuyentesRepository);
    }

    getContribuyente() {
        return this.contribuyentesRepository.find({});
    }

    getContribuyenteId(id: number) {
        return this.contribuyentesRepository.findOne({
            where: { id },
        });
    }

    updateContribuyente(id: number, data: Contribuyentes) {
        return this.contribuyentesRepository.update({ id }, data);
    }
}
