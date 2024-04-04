import { Module } from '@nestjs/common';
import { PublicationController } from 'src/controllers/publication/publication.controller';
import { DatabaseModule } from 'src/database/database.module';
import { publicationProviders } from 'src/services/publication/publication.providers';
import { PublicationService } from 'src/services/publication/publication.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PublicationController],
    providers: [
        ...publicationProviders,
        PublicationService
    ]})
export class PublicationModule {}
