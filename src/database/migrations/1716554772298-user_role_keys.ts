import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UserRoleKeys1716554772298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
          "user_roles",
          new TableForeignKey({
              columnNames: ["userId"],
              referencedColumnNames: ["id"],
              referencedTableName: "users",
              onDelete: "CASCADE",
          }),
        )

        await queryRunner.createForeignKey(
          "user_roles",
          new TableForeignKey({
              columnNames: ["roleId"],
              referencedColumnNames: ["id"],
              referencedTableName: "roles",
              onDelete: "CASCADE",
          }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("user_roles")
        if(table) {
            let foreignKey = table.foreignKeys.find(
              (fk) => fk.columnNames.indexOf("roleId") !== -1,
            )

            if(foreignKey) {
                await queryRunner.dropForeignKey("user_roles", foreignKey)
            }

            foreignKey = table.foreignKeys.find(
              (fk) => fk.columnNames.indexOf("userId") !== -1,
            )

            if(foreignKey) {
                await queryRunner.dropForeignKey("user_roles", foreignKey)
            }
        }
    }

}
