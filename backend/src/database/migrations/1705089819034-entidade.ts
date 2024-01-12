import { MigrationInterface, QueryRunner } from "typeorm";

export class Entidade1705089819034 implements MigrationInterface {
    name = 'Entidade1705089819034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`senha\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`senha\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`senha\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`senha\` varchar(50) NOT NULL`);
    }

}
