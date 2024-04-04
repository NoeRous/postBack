import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PublicationService } from 'src/services/publication/publication.service';

@Controller('publication')
export class PublicationController {


    constructor(private readonly _publicationService: PublicationService){}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Listado de todas las publicaciones' })
    async findAll(){
        return this._publicationService.findAll();
    }

    @Get('active')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Listado de publicaciones activas' })
    async findAllActive(){
        return this._publicationService.findActive();
    }
}
