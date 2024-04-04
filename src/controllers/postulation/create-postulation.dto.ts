import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator";
import { CreatePersonDto } from "../person/create-person.dto";
import { CreateApplicantDto } from "../applicant/create-applicant.dto";

export class CreatePostulationDto{
   

    @IsNotEmpty()
    institution_id: number

    @IsNotEmpty()
    position_id: number

    @IsNotEmpty()
    position_type_id: number

    @IsNotEmpty()
    announcement_id: number

    @IsNotEmpty()
    @IsBoolean()
    is_payroll: boolean
    
    @IsOptional()
    voucher: string;
    
    @IsOptional()
    voucher_url: string;
}