import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ForgottenPasswordTemplateDto } from '../dto/auth/email/forgotten.password.template';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService) {}

  async sendPasswordResetEmail(forgottenPassword:ForgottenPasswordTemplateDto) {
    return await this.mailerService.sendMail({
      to:forgottenPassword.email,
      subject:'Have you requested a password reset?',
      template:'./request.reset.hbs',
      context:{
        name:forgottenPassword.name,
        link:forgottenPassword.link
      }
    })
  }
}
