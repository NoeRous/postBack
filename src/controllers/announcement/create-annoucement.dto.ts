import { Optional } from "@nestjs/common";
import { IsNotEmpty } from "class-validator";

export class CreateAnnouncementDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    date_init: Date
    @IsNotEmpty()
    date_end: Date
    @IsNotEmpty()
    cite:string

    @IsNotEmpty()
    year:number

    @Optional()
    file_url

    @Optional()
    image_url

    @Optional()
    publication_date

    @Optional()
    created_by:number
}