import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { google } from 'googleapis';
import { Options } from 'nodemailer/lib/smtp-transport';

@Injectable()
export class EmailService {
    constructor(private mailService: MailerService) {
        
    }

    private async setTransport() {
        const OAuth2 = google.auth.OAuth2;
        const oauth2Client = new OAuth2(
            process.env.MAIL_ID,
            process.env.MAIL_SECRET,
            'https://developers.google.com/oauthplayground',
        );
    
        oauth2Client.setCredentials({
          refresh_token: process.env.MAIL_REFRESH,
        });
    
        const accessToken: string = await new Promise((resolve, reject) => {
          oauth2Client.getAccessToken((err, token) => {
            if (err) {
              reject('Failed to create access token');
            }
            resolve(token);
          });
        });
    
        const config: Options = {
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USER,
            clientId: process.env.MAIL_ID,
            clientSecret: process.env.MAIL_SECRET,
            accessToken,
          },
        };
        this.mailService.addTransporter('gmail', config);
      }
    
    public async sendRegisterMail(sendTo:string,name:string,url:string) {
        await this.setTransport();
        this.mailService
          .sendMail({
            transporterName: 'gmail',
            to:sendTo, 
            from:process.env.MAIL_USER, 
            subject: 'Verficación de Registro', 
            template: 'register',
            context: {
                // Data to be sent to template engine.
                full_name: name,
                url: url,
              },
          })
          .then((success) => {
            console.log(success);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
}
