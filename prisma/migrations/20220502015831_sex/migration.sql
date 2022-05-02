/*
  Warnings:

  - You are about to drop the column `gender` on the `pet` table. All the data in the column will be lost.
  - Added the required column `sex` to the `pet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "pet" DROP COLUMN "gender",
ADD COLUMN     "sex" "Sex" NOT NULL;
