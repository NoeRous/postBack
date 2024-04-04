import { Inject, Injectable } from '@nestjs/common';
import { PhaseAction } from 'src/modules/phase_action/phase_action.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhaseActionService {

    constructor(
        @Inject('PHASE_ACTION_REPOSITORY')
        private phaseActionRepository: Repository<PhaseAction>,
    ){}


    async findByType(phaseId:number,type:string){
        return await this.phaseActionRepository.find({where:{phase:{id:phaseId},type:type}});
    }
}
