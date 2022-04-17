/*
  Warnings:

  - You are about to drop the column `bDate` on the `dog` table. All the data in the column will be lost.
  - Added the required column `b_date` to the `dog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dog" DROP COLUMN "bDate",
ADD COLUMN     "b_date" TIMESTAMP(3) NOT NULL;
