import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ForgottenPasswordTemplateDto } from '../dto/auth/email/forgotten.password.template';
import { WelcomeEmailDto } from '../dto/auth/email/welcome.email';

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

  async sendVerificationEmail(welcomeEmail:WelcomeEmailDto) {
    return await this.mailerService.sendMail({
      to:welcomeEmail.email,
      subject:'Welcome to exile models',
      template:'./welcome.email.hbs',
      context:{
        name:welcomeEmail.name,
        link:welcomeEmail.link
      }
    })
  }
}
