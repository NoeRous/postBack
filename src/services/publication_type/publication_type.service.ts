import { Inject, Injectable } from '@nestjs/common';
import { PublicationType } from 'src/modules/publication_type/publication_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationTypeService {

    constructor(
        @Inject('PUBLICATION_TYPE_REPOSITORY')
        private publicationTypeRepository: Repository<PublicationType>
    ){}


    findById(id:number): Promise<PublicationType>{
        return this.publicationTypeRepository.findOneBy({id:id});
    }

    async findAll(): Promise<PublicationType[]>{
        return this.publicationTypeRepository.find();
    }
}
