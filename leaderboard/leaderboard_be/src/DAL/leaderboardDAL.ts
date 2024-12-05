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

  // Find or create game
  let game = await prisma.game.findFirst({
    where: { name: { equals: gameName, mode: "insensitive" } },
  });
  if (!game) {
    game = await prisma.game.create({ data: { name: gameName } });
  }

  // Find or create genre
  let genre = await prisma.genre.findFirst({
    where: { name: { equals: genreName, mode: "insensitive" } },
  });
  if (!genre) {
    genre = await prisma.genre.create({ data: { name: genreName } });
  }

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

  // Handle players and link with the session: Find or create each player and
  // link them to the session
  for (const player of players) {
    const [firstName, ...lastNameParts] = player.name.split(/\s+/);
    const lastName = lastNameParts.join(" ") || "Unknown";

    let playerRecord = await prisma.player.findFirst({
      where: {
        firstName: { equals: firstName, mode: "insensitive" },
        lastName: { equals: lastName, mode: "insensitive" },
      },
    });
    if (!playerRecord) {
      playerRecord = await prisma.player.create({
        data: { firstName, lastName },
      });
    }

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

/**
 * Fetches all leaderboards with game name, game date, and player details.
 *
 * @returns A promise that resolves with the leaderboard data.
 */
export async function getLeaderboardsDAL() {
  return await prisma.session.findMany({
    include: {
      game: {
        select: {
          name: true,
        },
      },
      sessionPlayers: {
        include: {
          player: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
    },
  });
}
