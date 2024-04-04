import { DataSource } from "typeorm";
import { PostulationPhaseState } from "src/modules/postulation_phase_state/postulation_phase_state.entity";

export const postulationPhaseStateProviders = [
    {
        provide: 'POSTULATION_PHASE_STATE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PostulationPhaseState),
        inject: ['DATA_SOURCE']
    }
]