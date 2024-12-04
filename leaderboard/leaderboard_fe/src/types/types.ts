export interface Player {
  name: string;
  score: string;
  place: string;
}

export interface LeaderboardFormValues {
  title: string;
  genre: string;
  players: Player[];
}

export interface DecodedToken {
  userId: string;
  roleName: string;
  exp: number; // Expiry timestamp
  iat: number; // Issued at timestamp
}
