/*
  Warnings:

  - You are about to drop the column `UserId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `screenId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `showTimeId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `Genre` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `Rating` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `screenId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `screenId` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the `Screens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShowTime` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hallId]` on the table `hallAddress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacity` to the `Halls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hallId` to the `Seat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hallId` to the `hallAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_screenId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_showTimeId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_screenId_fkey";

-- DropForeignKey
ALTER TABLE "Screens" DROP CONSTRAINT "Screens_hallId_fkey";

-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_screenId_fkey";

-- DropForeignKey
ALTER TABLE "ShowTime" DROP CONSTRAINT "ShowTime_hallId_fkey";

-- DropForeignKey
ALTER TABLE "ShowTime" DROP CONSTRAINT "ShowTime_movieId_fkey";

-- DropForeignKey
ALTER TABLE "ShowTime" DROP CONSTRAINT "ShowTime_screenId_fkey";

-- DropIndex
DROP INDEX "Address_UserId_key";

-- DropIndex
DROP INDEX "hallAddress_id_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "UserId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "screenId",
DROP COLUMN "showTimeId";

-- AlterTable
ALTER TABLE "Halls" ADD COLUMN     "capacity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "Description",
DROP COLUMN "Genre",
DROP COLUMN "Image",
DROP COLUMN "Rating",
DROP COLUMN "screenId";

-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "screenId",
ADD COLUMN     "hallId" INTEGER NOT NULL,
ALTER COLUMN "available" SET DEFAULT true;

-- AlterTable
ALTER TABLE "hallAddress" DROP COLUMN "hallId",
ADD COLUMN     "hallId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Screens";

-- DropTable
DROP TABLE "ShowTime";

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "hallAddress_hallId_key" ON "hallAddress"("hallId");

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Halls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
