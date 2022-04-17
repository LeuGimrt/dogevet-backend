-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'USER';

-- CreateTable
CREATE TABLE "Dog" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "gender" INTEGER NOT NULL,
    "bDate" TIMESTAMP(3) NOT NULL,
    "img" TEXT NOT NULL,
    "registeredById" INTEGER NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dog_code_key" ON "Dog"("code");

-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
