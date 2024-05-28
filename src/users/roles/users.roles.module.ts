
import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserRoleEntity } from '../../entities/user.role.entity';
import { UsersRolesService } from './users.roles.service';

@Module({
  providers: [UsersRolesService],
  exports: [UsersRolesService],
  imports: [
    TypeOrmModule.forFeature([UserRoleEntity]),
  ],
})
export class UsersRolesModule {}
