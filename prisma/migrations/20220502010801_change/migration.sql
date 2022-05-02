/*
  Warnings:

  - You are about to drop the column `dog_id` on the `consultation` table. All the data in the column will be lost.
  - You are about to drop the `dog` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pet_id` to the `consultation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "consultation" DROP CONSTRAINT "consultation_dog_id_fkey";

-- DropForeignKey
ALTER TABLE "dog" DROP CONSTRAINT "dog_registered_by_id_fkey";

-- AlterTable
ALTER TABLE "consultation" DROP COLUMN "dog_id",
ADD COLUMN     "pet_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "dog";

-- CreateTable
CREATE TABLE "pet" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "type" VARCHAR(40) NOT NULL,
    "gender" INTEGER NOT NULL,
    "b_date" TIMESTAMP(3) NOT NULL,
    "img" VARCHAR(200) NOT NULL,
    "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registered_by_id" TEXT NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
