import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UserRoles1716554144251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'user_roles',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name:'userId',
                        type:'int'
                    },
                    {
                        name:'roleId',
                        type:'int'
                    },
                    {
                        name:'createdAt',
                        type:'timestamp',
                        default:'now()'
                    },
                    {
                        name:'updatedAt',
                        type:'timestamp',
                        isNullable:true
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_roles');
    }

}
