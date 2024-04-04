import { Inject, Injectable } from '@nestjs/common';
import { Publication } from 'src/modules/publication/publication.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationService {

    constructor(
        @Inject('PUBLICATION_REPOSITORY')
        private publicationRepository: Repository<Publication>
    ){}


    findById(id:number): Promise<Publication>{
        return this.publicationRepository.findOneBy({id:id});
    }

    async findAll(): Promise<Publication[]>{
        return this.publicationRepository.find();
    }

    async findActive(): Promise<Publication[]>{

        const dateCurrent = new Date();

        return this.publicationRepository
          .createQueryBuilder('p')
          .where(':dateCurrent >= p.date_publication', { dateCurrent })
          .andWhere('p.is_active = true')
          .getMany();
    }

}
