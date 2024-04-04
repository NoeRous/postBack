import { Controller, Get } from '@nestjs/common';
import { EmailService } from 'src/services/email/email.service';

@Controller('email')
export class EmailController {
    constructor(private emailService:EmailService){
      
    }
    @Get()
    async plainTextEmail() {
        let sendTo = "ssrasc@gmail.com";
        let name = "ROGERS SALINAS";
        let url = "#####";
        return this.emailService.sendRegisterMail(sendTo,name,url);
        
    }
}
