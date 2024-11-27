/*
  Warnings:

  - A unique constraint covering the columns `[game_id,genre_id]` on the table `game_genre` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "game_genre_game_id_genre_id_key" ON "game_genre"("game_id", "genre_id");
