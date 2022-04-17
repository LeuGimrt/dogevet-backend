/*
  Warnings:

  - The primary key for the `dog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `code` on the `dog` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "consultation" DROP CONSTRAINT "consultation_dog_id_fkey";

-- DropForeignKey
ALTER TABLE "consultation" DROP CONSTRAINT "consultation_registered_by_id_fkey";

-- DropForeignKey
ALTER TABLE "dog" DROP CONSTRAINT "dog_registered_by_id_fkey";

-- DropIndex
DROP INDEX "dog_code_key";

-- AlterTable
ALTER TABLE "consultation" ALTER COLUMN "registered_by_id" SET DATA TYPE TEXT,
ALTER COLUMN "dog_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "dog" DROP CONSTRAINT "dog_pkey",
DROP COLUMN "code",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "registered_by_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "dog_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "dog_id_seq";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_id_seq";

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
