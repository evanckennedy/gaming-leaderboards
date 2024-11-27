import prisma from "./prismaClient";
import { LeaderboardFormValues } from "../types/types";

export async function createLeaderboardDAL(data: LeaderboardFormValues) {
  const { gameName, genreName, players } = data;

  // Upsert game: if a game with the given name exists, update it; otherwise,
  // create a new game
  const game = await prisma.game.upsert({
    where: { name: gameName },
    update: {},
    create: { name: gameName },
  });

  // Upsert genre: if a genre with the given name exits, update it; otherwise,
  // create a new genre
  const genre = await prisma.genre.upsert({
    where: { name: genreName },
    update: {},
    create: { name: genreName },
  });

  // Upsert gameGenre: Link game and genre if not already linked already linked
  await prisma.gameGenre.upsert({
    where: {
      gameId_genreId: {
        gameId: game.id,
        genreId: genre.id,
      },
    },
    update: {},
    create: {
      gameId: game.id,
      genreId: genre.id,
    },
  });

  // Create session
  const session = await prisma.session.create({
    data: {
      gameId: game.id,
    },
  });

  // Handle players and link with the session: Upsert each player and link them
  // to the session
  for (const player of players) {
    const [firstName, ...lastNameParts] = player.name.split(/\s+/);
    const lastName = lastNameParts.join(" ") || "Unknown";

    let playerRecord = await prisma.player.upsert({
      where: { firstName_lastName: { firstName, lastName } },
      update: {},
      create: { firstName, lastName },
    });

    await prisma.sessionPlayer.create({
      data: {
        sessionId: session.id,
        playerId: playerRecord.id,
        score: player.score,
        placement: player.place,
      },
    });
  }

  // Return the created data
  return { game, genre, session };
}
