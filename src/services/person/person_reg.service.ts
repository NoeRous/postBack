import { Inject, Injectable ,ForbiddenException} from '@nestjs/common';
import { CreatePersonDto } from 'src/controllers/person/create-person.dto';
import { Person } from 'src/modules/person/person.entity';
import { User } from 'src/user/user.entity';
import { DataSource, Repository } from 'typeorm';
import { Role } from 'src/modules/role/role.entity';
import { UserRole } from 'src/modules/user_role/user_role.entity';
import { Applicant } from 'src/modules/aplicant/aplicant.entity';
import { HttpService } from "@nestjs/axios";
import { map, catchError, tap } from 'rxjs';

@Injectable()
export class PersonRegService {
    constructor(
        @Inject('DATA_SOURCE')
        private readonly dataSource:DataSource,
        @Inject('ROLE_REPOSITORY')
        private roleRepository: Repository<Role>,
        private http: HttpService
    ){}

    
    async createAplicant(person: CreatePersonDto,username:string,password:string,activation_code:string) {
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
           // let person_save=await this.create(person)
           // let responseUser = await this.authService.create(username, password,person_save,activation_code)

            const personNew = new Person;
            personNew.firts_name = person.firts_name;
            personNew.second_name = person.second_name;
            personNew.last_name = person.last_name;
            personNew.mothers_last_name = person.mothers_last_name;
            personNew.husband_last_name = person.husband_last_name;
            personNew.address = person.address;
            personNew.birth_date = person.birth_date;
            personNew.email = person.email;
            personNew.personal_number = person.personal_number;
            personNew.phone = person.phone;
            personNew.identity_card = person.identity_card;
            personNew.identity_card_complement = person.identity_card_complement;
            personNew.tPartGender= person.tParGender
            let person_save=await queryRunner.manager.save<Person>(personNew);

            const userNew = new User;
            userNew.username = username;
            userNew.password = password;
            userNew.person = person_save;
            userNew.activation_code = activation_code;
            let user_save = await queryRunner.manager.save<User>(userNew); 
          
           
            let applicant = new Applicant;
            applicant.person=person_save;
            applicant.rda_number=person.rda_number? person.rda_number:null;
            
            let applicant_save = await queryRunner.manager.save<Applicant>(applicant)
            
            const role: Role = await this.roleRepository.findOneBy({name:'POSTULANTE'}) 
            let userRole = new UserRole;
            userRole.role=role;
            userRole.user=user_save
          
            let rol_user_save = await queryRunner.manager.save<UserRole>(userRole);
            
            await queryRunner.commitTransaction(); 
            
            return applicant_save;

        } catch (err) {
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();
            return false;
        } finally {
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
    }
    async contrastSegip(){
      try {
        //endpoint de contrastacion SEGIP
        const response = await this.http.get( 'currentprice.json',
          {
            baseURL: process.env.SEGIP_URL,
            params: {
              ID: 12345
            },
            //headers: {'Authorization': 'Bearer'}
          })
          .pipe(
            map((res) => {
              return res.data;
            }),
          )
          .toPromise();
        return response;
      } catch (error) {
        console.error(error)
      }
      //   return this.http
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .pipe(
      //   map((res) => res.data?.bpi),
      //   map((bpi) => bpi?.USD),
      //   map((usd) => {
      //     return usd?.rate;
      //   }),
      // )
      // .pipe(
      //   catchError(() => {
      //     throw new ForbiddenException('API not available');
      //   }),
      // );
    }
}
