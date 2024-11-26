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
