import { DataSource } from "typeorm";
import { PostulationPhaseDetail } from "src/modules/postulation_phase_detail/postulation_phase_detail.entity";

export const postulationPhaseDetailProviders = [
    {
        provide: 'POSTULATION_PHASE_DETAIL_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PostulationPhaseDetail),
        inject: ['DATA_SOURCE']
    }
]