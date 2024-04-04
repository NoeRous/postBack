import { Module } from '@nestjs/common';
import { PostulationPhaseController } from 'src/controllers/postulation_phase/postulation_phase.controller';
import { DatabaseModule } from 'src/database/database.module';
import { postulationPhaseProviders } from 'src/services/postulation_phase/postulation_phase.providers';
import { PostulationPhaseService } from 'src/services/postulation_phase/postulation_phase.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PostulationPhaseController],
    providers: [
        ...postulationPhaseProviders,
        PostulationPhaseService
    ]})
export class PostulationPhaseModule {}
