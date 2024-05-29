import { Command, CommandRunner } from 'nest-commander';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../../../users/users.service';
import * as process from 'node:process';
import { CreateUserDto } from '../../../dto/user/create.user';
const tableName: string = 'users';
const errorMessage: string = 'Missing user seed data.';
const finishedSeedingMessage: string = 'Finished seeding users';

@Command({
  name: 'seed-' + tableName,
  arguments: '',
  options: {},
})
export class UserSeederCommand extends CommandRunner {
  private readonly logger: Logger = new Logger();
  constructor(private readonly usersService: UsersService) {
    super();
  }
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    console.log('Seeding ' + tableName);
    const usersToLoad: any[] = [];
    const defaultAdminUser = this.getDefaultAdminUser();
    usersToLoad.push(defaultAdminUser);
    const totalToLoad: number = usersToLoad.length;
    let loaded: number = 0;
    let skipped: number = 0;

    for (const userDto of usersToLoad) {
      const user = await this.usersService.findOneBy(userDto.email);
      if (!user) {
        await this.usersService.create(userDto);
        loaded++;
      } else {
        skipped++;
      }
    }

    console.log(finishedSeedingMessage);
    console.log(
      'attempted:' + totalToLoad + ',loaded:' + loaded + ',skipped:' + skipped,
    );
  }

  getDefaultAdminUser = () => {
    const adminUserEmail = process.env.ADMIN_USER_EMAIL;
    const adminPassword = process.env.ADMIN_USER_PASSWORD;
    const adminUserName = process.env.ADMIN_USER_USERNAME;

    if (!(adminUserEmail && adminPassword && adminUserName)) {
      throw new InternalServerErrorException(errorMessage);
    }
    const userDto: CreateUserDto = {
      createdAt: new Date(),
      username: adminUserName,
      password: adminPassword,
      email: adminUserEmail,
    };

    return userDto;
  };
}
