import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PublicationTypeService } from 'src/services/publication_type/publication_type.service';

@Controller('publication-type')
export class PublicationTypeController {

    constructor(private readonly _publicationTypeService: PublicationTypeService){}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Listado de tipos de publicación' })
    async findAll(){
        return this._publicationTypeService.findAll();
    }


}
