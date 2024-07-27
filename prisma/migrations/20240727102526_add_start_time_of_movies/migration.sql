/*
  Warnings:

  - Added the required column `startTime` to the `hallMovie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hallMovie" ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
