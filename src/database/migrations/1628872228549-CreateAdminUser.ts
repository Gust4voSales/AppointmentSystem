import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAdminUser1628872228549 implements MigrationInterface {
    name = 'CreateAdminUser1628872228549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_06744d221bb6145dc61e5dc441d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admin_users"`);
    }

}
