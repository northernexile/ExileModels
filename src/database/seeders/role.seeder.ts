import { Seeder } from '@jorgebodega/typeorm-seeding';
import { RoleEntity } from '../../entities/role.entity';
import { DataSource } from 'typeorm';
import { RoleFactory } from '../factories/role.factory';

class RoleSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const roleList:any = [];
    const roleFactory = new RoleFactory();
    const roleNames = ['Admin', 'Guest'];
    roleNames.forEach((roleName) => {
      const roleObject = this.createRole(roleFactory, roleName);
      roleList.push(roleObject);
    });
    await dataSource.createEntityManager().save<RoleEntity>(roleList);
  }

  async createRole(roleFactory: RoleFactory, name: string) {
    return await roleFactory.create({
      name: name,
    });
  }
}