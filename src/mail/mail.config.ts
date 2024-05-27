import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export class MailerConfig implements MailerOptionsFactory {
  createMailerOptions(): MailerOptions | Promise<MailerOptions> {
    console.log('pre-user')
    console.log(process.env.MAIL_USER); // should have value
    console.log('post user')
    const options = {
      transport: {
        port:Number(process.env.MAIL_PORT),
        host:String(process.env.MAIL_HOST),
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"No Reply" <noreply@exilemodels.co.uk>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    };

    console.log(options)

    return options
  }
}