/*
  Warnings:

  - Added the required column `hallMovieId` to the `Seat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Seat" ADD COLUMN     "hallMovieId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_hallMovieId_fkey" FOREIGN KEY ("hallMovieId") REFERENCES "hallMovie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
