import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1651781763449 implements MigrationInterface {
    name = 'createTables1651781763449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "phone" integer, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" uuid NOT NULL, "name" character varying NOT NULL, "weekly_hours" integer NOT NULL, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
