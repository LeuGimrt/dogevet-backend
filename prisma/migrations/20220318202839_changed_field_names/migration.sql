/*
  Warnings:

  - You are about to drop the column `registeredById` on the `dog` table. All the data in the column will be lost.
  - Added the required column `registered_by_id` to the `dog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dog" DROP CONSTRAINT "dog_registeredById_fkey";

-- AlterTable
ALTER TABLE "dog" DROP COLUMN "registeredById",
ADD COLUMN     "registered_by_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
