import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import * as process from 'node:process';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerConfig } from './mail.config';

@Module({
  imports: [
    ConfigModule,
    MailerModule.forRootAsync({
      useClass: MailerConfig,
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
