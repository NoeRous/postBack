import { DataSource } from "typeorm";
import { PublicationType } from "src/modules/publication_type/publication_type.entity";

export const publicationTypeProviders = [
    {
        provide: 'PUBLICATION_TYPE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PublicationType),
        inject: ['DATA_SOURCE']
    }
]