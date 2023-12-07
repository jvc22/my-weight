/*
  Warnings:

  - Added the required column `real_created_at` to the `adult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `real_created_at` to the `baby` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adult" ADD COLUMN     "real_created_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "baby" ADD COLUMN     "real_created_at" TIMESTAMP(3) NOT NULL;
