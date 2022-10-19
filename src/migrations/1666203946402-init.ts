import { MigrationInterface, QueryRunner } from "typeorm";

export class init1666203946402 implements MigrationInterface {
    name = 'init1666203946402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subject_students_student" ("subjectId" uuid NOT NULL, "studentId" uuid NOT NULL, CONSTRAINT "PK_7e4e3b5a823effde8ef2ebe7466" PRIMARY KEY ("subjectId", "studentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_88a19df8df6bb839d2c9f4e291" ON "subject_students_student" ("subjectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e814a4fd0f3e4a6fef9939328d" ON "subject_students_student" ("studentId") `);
        await queryRunner.query(`ALTER TABLE "subject_students_student" ADD CONSTRAINT "FK_88a19df8df6bb839d2c9f4e291a" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subject_students_student" ADD CONSTRAINT "FK_e814a4fd0f3e4a6fef9939328db" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_students_student" DROP CONSTRAINT "FK_e814a4fd0f3e4a6fef9939328db"`);
        await queryRunner.query(`ALTER TABLE "subject_students_student" DROP CONSTRAINT "FK_88a19df8df6bb839d2c9f4e291a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e814a4fd0f3e4a6fef9939328d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_88a19df8df6bb839d2c9f4e291"`);
        await queryRunner.query(`DROP TABLE "subject_students_student"`);
    }

}
