/*
  Warnings:

  - You are about to alter the column `name` on the `dog` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `breed` on the `dog` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `img` on the `dog` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "dog" ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "breed" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "img" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "password" SET DATA TYPE VARCHAR(100);
