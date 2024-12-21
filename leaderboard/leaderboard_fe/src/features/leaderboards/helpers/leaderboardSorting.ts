interface FormattedLeaderboardData {
  gameName: string;
  rawGameDate: Date;
  displayGameDate: string;
  players: {
    fullName: string;
    placement: number;
    score: number;
  }[];
}

export function sortByLatest(leaderboards: FormattedLeaderboardData[]) {
  return leaderboards.sort((a, b) => {
    return b.rawGameDate.getTime() - a.rawGameDate.getTime();
  });
}
