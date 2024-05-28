
import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserRoleEntity } from '../../entities/user.role.entity';
import { UsersRolesService } from './users.roles.service';
import { UsersRolesController } from './users.roles.controller';
import { RolesService } from '../../roles/roles.service';
import { RolesModule } from '../../roles/roles.module';

@Module({
  providers: [UsersRolesService,RolesModule],
  exports: [UsersRolesService],
  imports: [
    TypeOrmModule.forFeature([UserRoleEntity]),
    RolesModule
  ],
  controllers:[UsersRolesController]
})
export class UsersRolesModule {}
