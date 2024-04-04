import { Module } from '@nestjs/common';
import { PhaseActionController } from 'src/controllers/phase_action/phase_action.controller';
import { DatabaseModule } from 'src/database/database.module';
import { announcementInstitutionPositionProviders } from 'src/services/announcement_institution_position/announcement_institution_position.providers';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';
import { applicantProviders } from 'src/services/applicant/applicant.providers';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { InstitutionPositionProviders } from 'src/services/institution_position/institution_position.providers';
import { InstitutionPositionService } from 'src/services/institution_position/institution_position.service';
import { personProviders } from 'src/services/person/person.providers';
import { PersonService } from 'src/services/person/person.service';
import { phaseProviders } from 'src/services/phase/phase.providers';
import { PhaseService } from 'src/services/phase/phase.service';
import { phaseActionProviders } from 'src/services/phase_action/phase_action.providers';
import { PhaseActionService } from 'src/services/phase_action/phase_action.service';
import { postulationProviders } from 'src/services/postulation/postulation.providers';
import { PostulationService } from 'src/services/postulation/postulation.service';
import { postulationPhaseProviders } from 'src/services/postulation_phase/postulation_phase.providers';
import { PostulationPhaseService } from 'src/services/postulation_phase/postulation_phase.service';
import { postulationStateProviders } from 'src/services/postulation_state/postulation_state.providers';
import { PostulationStateService } from 'src/services/postulation_state/postulation_state.service';
import { roleProviders } from 'src/services/role/role.providers';
import { RoleService } from 'src/services/role/role.service';
import { userProviders } from 'src/user/user.providers';
import { UserService } from 'src/user/user.service';
import { PostulationTest } from '../postulation_test/postulation_test.entity';
import { postulationTestProviders } from 'src/services/postulation_test/postulation_test.providers';
import { AnnouncementService } from 'src/services/announcement/announcement.service';
import { announcementProviders } from 'src/services/announcement/announcement.providers';
import { PhaseSequenceService } from 'src/services/phase_sequence/phase_sequence.service';
import { phaseSequenceProviders } from 'src/services/phase_sequence/phase_sequence.providers';
import { TParPositionTypeService } from 'src/services/t_par_position_type/t_par_position_type.service';
import { tParPositionTypeProviders } from 'src/services/t_par_position_type/t_par_position_type.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [PhaseActionController],
    providers: [
        ...phaseActionProviders,
        ...postulationProviders,
        ...applicantProviders,
        ...announcementInstitutionPositionProviders,
        ...InstitutionPositionProviders,
        ...userProviders,
        ...personProviders,
        ...phaseProviders,
        ...postulationStateProviders,
        ...roleProviders,
        ...postulationPhaseProviders,
        ...postulationTestProviders,
        ...announcementProviders,
        ...phaseSequenceProviders,
        ...tParPositionTypeProviders,
        PhaseActionService,
        PostulationService,
        ApplicantService,
        AnnouncementInstitutionPositionService,
        InstitutionPositionService,
        UserService,
        PersonService,
        PhaseService,
        PostulationStateService,
        RoleService,
        PostulationPhaseService,
        PostulationTest,
        AnnouncementService,
        PhaseSequenceService,
        TParPositionTypeService
    ]})
export class PhaseActionModule {}
