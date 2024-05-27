import {Command, CommandRunner} from 'nest-commander';
import { Logger } from '@nestjs/common';
import {RolesService} from '../../../roles/roles.service';
import {UsersService} from '../../../users/users.service';
import {UsersRolesService} from '../../../users/roles/users.roles.service';
import { CreateUserRoleDto } from '../../../dto/user/role/create.user.role';
import * as process from 'node:process';

const tableName:string = 'user_roles'
const finishedSeedingMessage:string = 'Finished seeding user roles'

const seedData:CreateUserRoleDto[] = []

@Command({
  name: 'seed-'+tableName,
  arguments: '',
  options: {}
})
export class UserRoleSeederCommand extends CommandRunner {
  private readonly logger: Logger = new Logger()

  constructor(
    private readonly rolesService: RolesService,
    private readonly usersService: UsersService,
    private readonly usersRolesService: UsersRolesService
    ) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log('Seeding ' + tableName)
    let skipped:number = 0;
    let seeded:number = 0;
    const userRolesToLoad = await this.getUserRolesToLoad()
    let attempting = userRolesToLoad.length

    for (const userRolesToLoadElement of userRolesToLoad) {
      const userId = userRolesToLoadElement.userId
      const roleId = userRolesToLoadElement.roleId

      if(userId && roleId) {
        const userRole = await this.usersRolesService.findExisting(
          userId, roleId
        )

        if (userRole) {
          skipped++
        } else {
          await this.usersRolesService.create({
            userId:userId,
            roleId:roleId,
            createdAt:new Date()
          })

          seeded++
        }
      }
    }

    console.log(finishedSeedingMessage)
    console.log('attempted:' + attempting + ',loaded:' + seeded + ',skipped:' + skipped)
  }

  async getUserRolesToLoad():Promise<CreateUserRoleDto[]> {
    const userRoles:CreateUserRoleDto[] = []
    const admin = await this.getAdminUserRole();
    if (admin) {
      userRoles.push(admin)
    }

    if(seedData) {
      for ( const seedDatum of seedData) {
        seedDatum.createdAt = new Date()
        userRoles.push(seedDatum)
      }
    }

    return userRoles
  }

  async getAdminUserRole() :Promise<CreateUserRoleDto|null|undefined> {
    const adminUser = null
    const adminEmail = process.env.ADMIN_USER_EMAIL;
    const adminRole = await this.rolesService.findOneBy('Admin')
    if (adminEmail && adminRole) {
      const adminUser = await this.usersService.findOneBy(adminEmail)
      if (adminUser) {
        return {
          userId:adminUser.id,
          roleId:adminRole.id,
          createdAt:new Date()
        }
      }
    }
  }



}
