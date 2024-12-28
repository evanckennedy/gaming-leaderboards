import MiniLeaderboard from "./MiniLeaderboard";
import { FormattedLeaderboardData } from "../helpers/leaderboardSorting";

interface LeaderboardsDisplayProps {
  sortedLeaderboards: FormattedLeaderboardData[];
}

function LeaderboardsDisplay({ sortedLeaderboards }: LeaderboardsDisplayProps) {
  return (
    <div className="grid grid-cols-3 gap-6 3xl:gap-9 4xl:gap-20">
      {sortedLeaderboards.map((leaderboard) => {
        const topPlayers = leaderboard.players
          .sort((a, b) => a.placement - b.placement)
          .slice(0, 3); // Take the top 3 players

        // Add placeholder players if there are fewer than 3 players
        // Using 'opacity-0' to hide the content while keeping the row's space
        while (topPlayers.length < 3) {
          topPlayers.push({
            fullName: "N/A",
            placement: topPlayers.length + 1,
            score: 0,
          });
        }

        return (
          <MiniLeaderboard
            key={leaderboard.id}
            leaderboard={leaderboard}
            topPlayers={topPlayers}
          />
        );
      })}
    </div>
  );
}

export default LeaderboardsDisplay;
