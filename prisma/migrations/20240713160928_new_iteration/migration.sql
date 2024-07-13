/*
  Warnings:

  - You are about to drop the column `hallId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_hallId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "hallId";

-- CreateTable
CREATE TABLE "hallMovie" (
    "id" SERIAL NOT NULL,
    "hallId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hallMovie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hallMovie" ADD CONSTRAINT "hallMovie_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Halls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hallMovie" ADD CONSTRAINT "hallMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
