export interface LeaderboardFormValues {
  gameName: string;
  genreName: string;
  players: { name: string; score: number; place: number }[];
}
