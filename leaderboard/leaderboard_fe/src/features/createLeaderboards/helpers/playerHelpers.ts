import { LeaderboardFormPlayer } from "@/types/types";

interface PlayerWithIndex extends LeaderboardFormPlayer {
  originalIndex: number;
}

/**
 * Adds an originalIndex to each player.
 *
 * This is necessary because sorting the players array changes the order,
 * and we need to reference the original indices to correctly access the
 * 'touched' data.
 *
 * @param players - Array of player objects.
 * @returns Array of players with originalIndex added.
 */
export function addOriginalIndex(
  players: LeaderboardFormPlayer[],
): PlayerWithIndex[] {
  return players.map((player, index) => ({
    ...player,
    originalIndex: index,
  }));
}

/**
 * Sorts players by their place value.
 *
 * Players with a valid place are sorted before those without one.
 * If a player's place is undefined or falsy, it's treated as `Infinity`,
 * placing them at the end of the sorted array.
 *
 * @param players - Array of players with originalIndex.
 * @returns Sorted array of players.
 */
export function sortPlayersByPlace(
  players: PlayerWithIndex[],
): PlayerWithIndex[] {
  return players.slice().sort((a, b) => {
    const placeA = Number(a.place) || Infinity;
    const placeB = Number(b.place) || Infinity;
    return placeA - placeB;
  });
}
