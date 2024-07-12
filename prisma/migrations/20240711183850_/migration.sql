/*
  Warnings:

  - You are about to drop the column `seatId` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[seatNumber]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seatNumber` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_seatId_fkey";

-- DropForeignKey
ALTER TABLE "hallAddress" DROP CONSTRAINT "hallAddress_id_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "seatId",
ADD COLUMN     "seatNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_seatNumber_key" ON "Booking"("seatNumber");

-- AddForeignKey
ALTER TABLE "hallAddress" ADD CONSTRAINT "hallAddress_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Halls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_seatNumber_fkey" FOREIGN KEY ("seatNumber") REFERENCES "Seat"("seatNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
