/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `game` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `genre` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "game_name_key" ON "game"("name");

-- CreateIndex
CREATE UNIQUE INDEX "genre_name_key" ON "genre"("name");
