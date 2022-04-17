/*
  Warnings:

  - You are about to drop the `Dog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dog" DROP CONSTRAINT "Dog_registeredById_fkey";

-- DropTable
DROP TABLE "Dog";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dog" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "gender" INTEGER NOT NULL,
    "bDate" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "registeredById" INTEGER NOT NULL,

    CONSTRAINT "dog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "dog_code_key" ON "dog"("code");

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
