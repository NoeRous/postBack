import { Controller, Get, HttpCode, UseGuards,Request, HttpStatus, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Postulation } from 'src/modules/postulation/postulation.entity';
import { PhaseService } from 'src/services/phase/phase.service';
import { PhaseActionService } from 'src/services/phase_action/phase_action.service';
import { PostulationService } from 'src/services/postulation/postulation.service';

@Controller('phase-action')
export class PhaseActionController {

    constructor(
        private readonly _phaseActionService: PhaseActionService,
        private postulationService: PostulationService,
        private phaseService: PhaseService
    ){}

    @UseGuards(AuthGuard)
    @Get('announcement/:id')
    @ApiOperation({ summary: 'Todas las acciones de la fase del rol'})
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req,@Param('id',ParseIntPipe) id:number){
        const phaseCurrent = await this.phaseService.findPhaseByAnnouncementCurrent(id);

        if(phaseCurrent.length > 1)
                throw new NotFoundException('Existe mas de una fase activa, favor de comunicarse con su encargado!');
        if(phaseCurrent.length == 0)
                throw new NotFoundException('No existe fase activa a la fecha!');
    
        return await this._phaseActionService.findByType(phaseCurrent[0].id,'ROLE');
    }

    @UseGuards(AuthGuard)
    @Get('postulation/:id')
    @ApiOperation({ summary: 'Todas las acciones por postulación'})
    @HttpCode(HttpStatus.OK)
    async findByPostulation(@Request() req,@Param('id',ParseIntPipe) id:number){

        const postulacion: Postulation = await this.postulationService.findById(id);
        return await this._phaseActionService.findByType(postulacion.currentPhase.id,'POSTULATION');
    }
}
