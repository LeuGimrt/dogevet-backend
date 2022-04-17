-- AlterTable
ALTER TABLE "dog" ADD COLUMN     "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "consultation" (
    "id" SERIAL NOT NULL,
    "symptoms" VARCHAR(100) NOT NULL,
    "x_ray_img" VARCHAR(200) NOT NULL,
    "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blood_test" VARCHAR(500) NOT NULL,
    "medicine" VARCHAR(100) NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,
    "registered_by_id" INTEGER NOT NULL,
    "dog_id" INTEGER NOT NULL,

    CONSTRAINT "consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultation" ADD CONSTRAINT "consultation_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
