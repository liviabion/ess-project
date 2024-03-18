/*
  Warnings:

  - A unique constraint covering the columns `[itemId,deliveryId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rating_itemId_deliveryId_key" ON "Rating"("itemId", "deliveryId");
