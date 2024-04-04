import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from 'src/controllers/email/email.controller';
import { EmailService } from 'src/services/email/email.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
    imports:[
      MailerModule
      .forRootAsync({
        
        useFactory: () => ({
            // transport: {
            //     host: process.env.MAIL_HOST || 'localhost',
            //     port: parseInt(process.env.MAIL_PORT) || 25,
            //     ignoreTLS:(process.env.MAIL_TLS == '1'),
            //     secure: (process.env.MAIL_SECURE == '1'),
            //     // host: 'smtp.gmail.com',
            //     // auth: {
            //     //   user:'dgfm.minedu.gob.bo@gmail.com',// process.env.MAIL_USER,
            //     //   pass:'dgfm.minedu',// process.env.MAIL_PASS,
            //     // },
            //   },
            transport: 'smtps://user@domain.com:pass@smtp.domain.com',
            template: {
                dir: 'src/email_templates',
                adapter: new HandlebarsAdapter(),
                options: {
                strict: true,
                },
            },
        }),
      }),
    ],
    controllers:[EmailController],
    providers:[EmailService]
})
export class EmailModule {
}


