/*
  Warnings:

  - You are about to drop the column `seatHallId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `seatNumber` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[seatId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seatId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_seatNumber_seatHallId_fkey";

-- DropIndex
DROP INDEX "Booking_seatNumber_seatHallId_key";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "seatHallId",
DROP COLUMN "seatNumber",
ADD COLUMN     "seatId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_seatId_key" ON "Booking"("seatId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
