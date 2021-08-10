import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeServiceToFK1628634916054 implements MigrationInterface {
    name = 'ChangeServiceToFK1628634916054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."appointments" RENAME COLUMN "service" TO "service_id"`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" DROP COLUMN "service_id"`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" ADD "service_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" ADD CONSTRAINT "UQ_2a2088e8eaa8f28d8de2bdbb857" UNIQUE ("service_id")`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" ADD CONSTRAINT "FK_2a2088e8eaa8f28d8de2bdbb857" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."appointments" DROP CONSTRAINT "FK_2a2088e8eaa8f28d8de2bdbb857"`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" DROP CONSTRAINT "UQ_2a2088e8eaa8f28d8de2bdbb857"`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" DROP COLUMN "service_id"`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" ADD "service_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."appointments" RENAME COLUMN "service_id" TO "service"`);
    }

}
