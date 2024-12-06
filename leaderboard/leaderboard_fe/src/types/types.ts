export interface LeaderboardFormPlayer {
  name: string;
  score: string;
  place: string;
}

export interface LeaderboardFormValues {
  title: string;
  genre: string;
  players: LeaderboardFormPlayer[];
}

export interface DecodedToken {
  userId: string;
  roleName: string;
  exp: number; // Expiry timestamp
  iat: number; // Issued at timestamp
}

export interface Player {
  firstName: string;
  lastName: string;
}

export interface SessionPlayer {
  id: number;
  sessionId: number;
  playerId: number;
  score: number;
  placement: number;
  player: Player;
}

export interface Game {
  name: string;
}

export interface Leaderboard {
  id: number;
  gameId: number;
  gameDate: string;
  game: Game;
  sessionPlayers: SessionPlayer[];
}

export interface User {
  id: number;
  roleId: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  accessFailedCount: number;
  lastLogin: Date;
  lockedOut: boolean;
  role: {
    roleName: string;
  };
}
