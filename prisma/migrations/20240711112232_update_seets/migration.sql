/*
  Warnings:

  - A unique constraint covering the columns `[seetid]` on the table `Seets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Seets_seetid_key" ON "Seets"("seetid");
