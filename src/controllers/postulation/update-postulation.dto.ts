import { IsOptional } from "class-validator";

export class UpdatePostulationDto{
   
    @IsOptional()
    file_proyect_url: string;
}