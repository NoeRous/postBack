import { Module } from '@nestjs/common';
import { PublicationTypeController } from 'src/controllers/publication_type/publication_type.controller';
import { DatabaseModule } from 'src/database/database.module';
import { publicationTypeProviders } from 'src/services/publication_type/publication_type.providers';
import { PublicationTypeService } from 'src/services/publication_type/publication_type.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PublicationTypeController],
    providers: [
        ...publicationTypeProviders,
        PublicationTypeService
    ]})
export class PublicationTypeModule {}
