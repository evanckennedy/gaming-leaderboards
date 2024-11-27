/*
  Warnings:

  - A unique constraint covering the columns `[first_name,last_name]` on the table `player` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "player_first_name_last_name_key" ON "player"("first_name", "last_name");
