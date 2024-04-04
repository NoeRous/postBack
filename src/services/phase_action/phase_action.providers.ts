import { DataSource } from "typeorm";
import { PhaseAction } from "src/modules/phase_action/phase_action.entity";

export const phaseActionProviders = [
    {
        provide: 'PHASE_ACTION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PhaseAction),
        inject: ['DATA_SOURCE']
    }
]