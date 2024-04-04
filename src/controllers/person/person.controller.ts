import { Controller, Get,Post,Request, HttpCode, HttpStatus,Body, NotFoundException,UseGuards, UseInterceptors, ClassSerializerInterceptor, UnprocessableEntityException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonService } from 'src/services/person/person.service';
import { CreatePersonDto } from './create-person.dto';
import { UserService } from 'src/user/user.service';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { CreateApplicantDto } from '../applicant/create-applicant.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserRole } from 'src/modules/user_role/user_role.entity';
import { UserRoleService } from 'src/services/user_role/user_role.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateEmployeeDto } from '../employee/create-employee.dto';
import { EmployeeService } from 'src/services/employee/employee.service';
import { CreateUserRolDto } from '../user_role/create-user_role.dto';
import { TParGenderService } from 'src/services/t_par_gender/t_par_gender.service';
import { EmailService } from 'src/services/email/email.service';
import * as bcrypt from 'bcrypt';
import { PersonRegService } from 'src/services/person/person_reg.service';


@ApiTags('Registro')
@Controller('person')
@UseInterceptors(ClassSerializerInterceptor)
export class PersonController {
    constructor(
        private readonly _personService: PersonService,
        private readonly personRegService: PersonRegService,
        private userService:UserService, 
        private authService:AuthService,
        private applicantService:ApplicantService,
        private userRoleService:UserRoleService,
        private employeeService:EmployeeService,
        private tParGenderService:TParGenderService,
        private emailService:EmailService,
        ){}
    
    saltOrRounds = 10;
    @UseGuards(AuthGuard)
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._personService.findAll();
    }

    @Post('applicant')
    @ApiOperation({ summary: 'Registro de postulante' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async createAplicant(@Body() personData: CreatePersonDto){
        
        const username = personData.identity_card_complement
        ? personData.identity_card + '-' + personData.identity_card_complement
        : personData.identity_card.toString();
        const password = personData.identity_card_complement
        ? personData.identity_card + '-' + personData.identity_card_complement
        : personData.identity_card.toString();

        //generamos un codigo aleatorio de 10 letras que se almacena para la verificacion
        let activation_code = Math.random().toString(36).slice(2, 12);

        const psw_hash = await bcrypt.hash(password, this.saltOrRounds)

        personData.tParGender = await this.tParGenderService.findById(personData.t_part_gender_id);

        try {
            if(process.env.SEGIP_VALIDAR  == '1'){
                //SE REALIZA LA CONTRASTACION CON SEGIP
              //  let datos = await this.personRegService.contrastSegip();
              //  datos.subscribe(value => {console.log(value.data);});

                let responseApplicant = await this.personRegService.createAplicant(personData,username, psw_hash,activation_code);
                if(responseApplicant){
                    this.emailService.sendRegisterMail(personData.email,personData.firts_name,activation_code);
                    return responseApplicant;
                }else{
                    throw new UnprocessableEntityException("No se realizo el registro");   
                }
            }else{
                //NO SE REALIZA CONTRASTACION
                let responseApplicant = await this.personRegService.createAplicant(personData,username, psw_hash,activation_code);
                if(responseApplicant){
                    this.emailService.sendRegisterMail(personData.email,personData.firts_name,activation_code);
                    return responseApplicant;
                }else{
                    throw new UnprocessableEntityException("No se realizo el registro");   
                }
            }

           
                    
        } catch (error) {

            throw new UnprocessableEntityException(error.message);   
        }  



            // let responsePerson = await this._personService.create(personData)

            // let responseUser = await this.authService.create(username, password,responsePerson,activation_code)

            // let createApplicantDto : CreateApplicantDto = {
            //     person:  responsePerson,
            //     rda_number:  personData.rda_number? personData.rda_number:null
            // };
            // let responseApplicant = await this.applicantService.create(createApplicantDto);
            // let userRole =  await this.userRoleService.createRolApplicant(responseUser);
       
            //el email debe ser enviado una ves se proceda con el registro
          
            
            
            
        //     const queryRunner = this.dataSource.createQueryRunner();
        //     await queryRunner.startTransaction()
            
        // try {
                
        //         await queryRunner.commitTransaction()

        // } catch (err) {
        // // if we have errors, rollback changes we made
        //     await queryRunner.rollbackTransaction()
        // } finally {
        // // release query runner which is manually created:
        // await queryRunner.release()
        // }


              
    }

    @Post('employee')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
 
    async createEmployee(@Body() personData: CreatePersonDto){
        try {
            personData.tParGender = await this.tParGenderService.findById(personData.t_part_gender_id);
            let responsePerson = await this._personService.create(personData)
            const username = personData.identity_card_complement
            ? personData.identity_card + '-' + personData.identity_card_complement
            : personData.identity_card.toString();
            const password = personData.identity_card_complement
            ? personData.identity_card + '-' + personData.identity_card_complement
            : personData.identity_card.toString();

            //generamos un codigo aleatorio de 10 letras que se almacena para la verificacion
            let activation_code = Math.random().toString(36).slice(2, 12);

            let responseUser = await this.authService.create(username, password,responsePerson,activation_code)
            let createEmployeeDto : CreateEmployeeDto = {
                person:  responsePerson,
                position:  personData.position,
                created_by:1//ojo
            };
            
            let responseEmployee = await this.employeeService.create(createEmployeeDto);

            let createUserRoleDto : CreateUserRolDto = {
                userId:  responseUser.id,
                roleId:  personData.role_id
            };
            console.log('createUserRoleDto: ',createUserRoleDto)
            console.log('fdsfsdfsdf: ')
            let responseUserRole = await this.userRoleService.create(createUserRoleDto);
            return responseEmployee
        } catch (error) {
            throw new UnprocessableEntityException(error.message);  
        }finally {
   
        }        
    }

    
    @Get('profile')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async findProfile(@Request() request ){
        const USER_ID = request.user.userId;
        const USER = await this.userService.findOneId(USER_ID);
        var person= await this._personService.findPersonById(USER.person.id);
        return {person,username:USER.username }
    }

}
