interface FormattedLeaderboardData {
  gameName: string;
  gameDate: string;
  players: {
    fullName: string;
    placement: number;
    score: number;
  }[];
}

export function sortByLatest(leaderboards: FormattedLeaderboardData[]) {
  return leaderboards.sort((a, b) => {
    const dateA = new Date(a.gameDate);
    const dateB = new Date(b.gameDate);
    return dateB.getTime() - dateA.getTime();
  });
}
