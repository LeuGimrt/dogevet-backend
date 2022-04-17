/*
  Warnings:

  - The primary key for the `consultation` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "consultation" DROP CONSTRAINT "consultation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "consultation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "consultation_id_seq";
