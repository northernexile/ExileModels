import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UsersCommands } from './users.commands';
import { RolesModule } from '../roles/roles.module';
import { UsersRolesModule } from './roles/users.roles.module';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, RolesModule, UsersRolesModule, ...UsersCommands],
  exports: [UsersService, ...UsersCommands],
  imports: [
    RolesModule,
    UsersRolesModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UsersController],
})
export class UsersModule {}
