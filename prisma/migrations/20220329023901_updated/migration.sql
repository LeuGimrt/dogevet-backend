/*
  Warnings:

  - You are about to alter the column `cost` on the `consultation` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(4,2)`.

*/
-- AlterTable
ALTER TABLE "consultation" ALTER COLUMN "cost" SET DATA TYPE DECIMAL(4,2);
