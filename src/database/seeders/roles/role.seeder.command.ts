import {Command, CommandRunner} from 'nest-commander';
import { Logger } from '@nestjs/common';
import {RolesService} from '../../../roles/roles.service';
import { CreateRoleDto } from '../../../dto/role/create.role';
const tableName:string = 'roles'
const finishedSeedingMessage:string = 'Finished seeding roles'

@Command({
  name: 'seed-'+tableName,
  arguments: '',
  options: {}
})
export class RoleSeederCommand extends CommandRunner{
  private readonly logger:Logger = new Logger()
  constructor(private readonly rolesService: RolesService) {
    super()
  }
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log('Seeding ' + tableName)
    const rolesToLoad:CreateRoleDto[] = this.getRolesToLoad();
    const totalToLoad:number = rolesToLoad.length
    let loaded:number = 0;
    let skipped:number = 0

    for (const roleDto of rolesToLoad) {
      const role = await this.rolesService.findOneBy(roleDto.name)
      if(!role) {
        await this.rolesService.create(roleDto)
        loaded++
      } else {
        skipped++
      }
    }

    console.log(finishedSeedingMessage)
    console.log('attempted:' + totalToLoad + ',loaded:' + loaded + ',skipped:' + skipped)
  }

  getRolesToLoad():CreateRoleDto[] {
    return  [
      {
        name:'Admin',
        createdAt:new Date()
      },
      {
        name:'Guest',
        createdAt: new Date()
      }
    ]
  }
}