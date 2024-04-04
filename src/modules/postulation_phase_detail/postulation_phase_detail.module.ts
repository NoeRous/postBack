import { Module } from '@nestjs/common';
import { PostulationPhaseDetailController } from 'src/controllers/postulation_phase_detail/postulation_phase_detail.controller';
import { DatabaseModule } from 'src/database/database.module';
import { postulationPhaseDetailProviders } from 'src/services/postulation_phase_detail/postulation_phase_detail.providers';
import { PostulationPhaseDetailService } from 'src/services/postulation_phase_detail/postulation_phase_detail.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PostulationPhaseDetailController],
    providers: [
        ...postulationPhaseDetailProviders,
        PostulationPhaseDetailService
    ]})
export class PostulationPhaseDetailModule {}
