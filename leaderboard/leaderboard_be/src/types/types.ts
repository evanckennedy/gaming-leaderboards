export interface LeaderboardFormValues {
  gameName: string;
  genreName: string;
  players: { name: string; score: number; place: number }[];
}

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpDALValues {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}
