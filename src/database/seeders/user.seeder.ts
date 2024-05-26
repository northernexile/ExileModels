import { Seeder } from '@jorgebodega/typeorm-seeding';
import {UserEntity} from '../../entities/user.entity';
import { DataSource } from 'typeorm';
import { UserFactory } from '../factories/user.factory';
import {hashPassword} from '../../auth/password.hash';

class UserSeeder extends Seeder {

  async run(dataSource: DataSource) {
    const userList = []
    const password = process.env.ADMIN_USER_PASSWORD

    if(password) {
      const userItem = await new UserFactory().create({
        username: process.env.ADMIN_USER_USERNAME,
        email: process.env.ADMIN_USER_EMAIL,
        password: hashPassword(password),
      })
      userList.push(userItem)
      const users: UserEntity[] = userList
      await dataSource.createEntityManager().save<UserEntity>(users)
    }
  }
}