/*
  Warnings:

  - You are about to drop the column `Duration` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `ReleaseDate` on the `Movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[seatNumber,seatHallId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[seatNumber,hallId]` on the table `Seat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seatHallId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_seatNumber_fkey";

-- DropIndex
DROP INDEX "Booking_seatNumber_key";

-- DropIndex
DROP INDEX "Seat_seatNumber_key";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "seatHallId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "Duration",
DROP COLUMN "ReleaseDate",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_seatNumber_seatHallId_key" ON "Booking"("seatNumber", "seatHallId");

-- CreateIndex
CREATE UNIQUE INDEX "Seat_seatNumber_hallId_key" ON "Seat"("seatNumber", "hallId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_seatNumber_seatHallId_fkey" FOREIGN KEY ("seatNumber", "seatHallId") REFERENCES "Seat"("seatNumber", "hallId") ON DELETE RESTRICT ON UPDATE CASCADE;
