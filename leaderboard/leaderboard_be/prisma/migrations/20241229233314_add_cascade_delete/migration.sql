-- DropForeignKey
ALTER TABLE "session_player" DROP CONSTRAINT "session_player_session_id_fkey";

-- AddForeignKey
ALTER TABLE "session_player" ADD CONSTRAINT "session_player_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
