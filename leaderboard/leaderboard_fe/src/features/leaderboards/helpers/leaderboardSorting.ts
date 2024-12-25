export interface FormattedLeaderboardData {
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
export function sortByOldest(leaderboards: FormattedLeaderboardData[]) {
  return leaderboards.sort((a, b) => {
    return a.rawGameDate.getTime() - b.rawGameDate.getTime();
  });
}

export function sortByAToZ(leaderboards: FormattedLeaderboardData[]) {
  return leaderboards.sort((a, b) => {
    return a.gameName.localeCompare(b.gameName);
  });
}

export function sortByZToA(leaderboards: FormattedLeaderboardData[]) {
  return leaderboards.sort((a, b) => {
    return b.gameName.localeCompare(a.gameName);
  });
}
