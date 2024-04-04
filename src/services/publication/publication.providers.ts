import { DataSource } from "typeorm";
import { Publication } from "src/modules/publication/publication.entity";

export const publicationProviders = [
    {
        provide: 'PUBLICATION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Publication),
        inject: ['DATA_SOURCE']
    }
]