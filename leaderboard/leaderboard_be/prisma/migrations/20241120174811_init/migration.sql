-- CreateTable
CREATE TABLE "game" (
    "id" SERIAL NOT NULL,
    "name" CHAR(100) NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genre" (
    "id" SERIAL NOT NULL,
    "name" CHAR(100) NOT NULL,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_genre" (
    "id" SERIAL NOT NULL,
    "game_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "game_genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "game_id" INTEGER NOT NULL,
    "game_date" DATE NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player" (
    "id" SERIAL NOT NULL,
    "first_name" CHAR(100) NOT NULL,
    "last_name" CHAR(100) NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session_player" (
    "id" SERIAL NOT NULL,
    "session_id" INTEGER NOT NULL,
    "player_id" INTEGER NOT NULL,
    "score" INTEGER,
    "placement" INTEGER NOT NULL,

    CONSTRAINT "session_player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "role_name" CHAR(50) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "first_name" CHAR(100) NOT NULL,
    "last_name" CHAR(100) NOT NULL,
    "email" CHAR(100) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "access_failed_count" INTEGER NOT NULL,
    "last_login" DATE NOT NULL,
    "locked_out" BOOLEAN NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "game_genre" ADD CONSTRAINT "game_genre_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_genre" ADD CONSTRAINT "game_genre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_player" ADD CONSTRAINT "session_player_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_player" ADD CONSTRAINT "session_player_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
