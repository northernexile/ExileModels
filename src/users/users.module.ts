import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import {UserEntity} from '../entities/user.entity';
import { UsersCommands } from './users.commands';


@Module({
  providers: [UsersService,...UsersCommands],
  exports: [UsersService,...UsersCommands],
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
})
export class UsersModule {}
