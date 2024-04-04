import { Module } from '@nestjs/common';
import { PostulationPhaseStateController } from 'src/controllers/postulation_phase_state/postulation_phase_state.controller';
import { DatabaseModule } from 'src/database/database.module';
import { postulationPhaseStateProviders } from 'src/services/postulation_phase_state/postulation_phase_state.providers';
import { PostulationPhaseStateService } from 'src/services/postulation_phase_state/postulation_phase_state.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PostulationPhaseStateController],
    providers: [
        ...postulationPhaseStateProviders,
        PostulationPhaseStateService
    ]})
export class PostulationPhaseStateModule {}
