
import {Module} from '@nestjs/common';
import {RolesService} from './roles.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import {RoleEntity} from '../entities/role.entity';
import {RoleCommands} from './roles.commands';


@Module({
  providers:[RolesService,...RoleCommands],
  exports:[RolesService,...RoleCommands],
  imports: [
    TypeOrmModule.forFeature([RoleEntity]),
  ]
})
export class RolesModule {}