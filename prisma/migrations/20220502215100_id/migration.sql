/*
  Warnings:

  - The primary key for the `consultation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `consultation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `pet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `registered_by_id` on the `consultation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pet_id` on the `consultation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `registered_by_id` on the `pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "consultation" DROP CONSTRAINT "consultation_pet_id_fkey";

-- DropForeignKey
ALTER TABLE "consultation" DROP CONSTRAINT "consultation_registered_by_id_fkey";

-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_registered_by_id_fkey";

-- AlterTable
ALTER TABLE "consultation" DROP CONSTRAINT "consultation_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "registered_by_id",
ADD COLUMN     "registered_by_id" INTEGER NOT NULL,
DROP COLUMN "pet_id",
ADD COLUMN     "pet_id" INTEGER NOT NULL,
ADD CONSTRAINT "consultation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "pet" DROP CONSTRAINT "pet_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "registered_by_id",
ADD COLUMN     "registered_by_id" INTEGER NOT NULL,
ADD CONSTRAINT "pet_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
