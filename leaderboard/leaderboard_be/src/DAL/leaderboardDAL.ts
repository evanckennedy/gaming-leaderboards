import prisma from "./prismaClient";
import { LeaderboardFormValues } from "../types/types";

/**
 * Creates a leaderboard in the database.
 *
 * This function handles the creation of a game, genre, and session, and links players to the session.
 *
 * Game and Genre Logic:
 * - Check if the game with the provided name exists:
 *   - If it exists, use that game.
 *   - If not, create the game.
 * - Add the genre to the game:
 *   - If the genre exists, associate it with the game.
 *   - If not, create the genre and associate it.
 *
 * Session Logic:
 * - Create a session entry.
 * - For each player:
 *   - Check if the player exists using first and last name:
 *     - If the player exists, use that player.
 *     - If not, create a new player.
 *   - Create a sessionPlayer entry, associating the player with their score and placement for that session.
 *
 * @param data - The data for creating the leaderboard, including game name, genre name, and player information.
 * @returns A promise that resolves with the created leaderboard data, including game, genre, and session information.
 */
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
