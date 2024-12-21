import MiniLeaderboard from "./MiniLeaderboard";
import { useFetchLeaderboards } from "../hooks/useFetchLeaderboards";

function LeaderboardsDisplay() {
  const leaderboards = useFetchLeaderboards();

  return (
    <div className="grid grid-cols-3 gap-6 3xl:gap-9 4xl:gap-20">
      {leaderboards.map((leaderboard, index) => {
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
            key={index}
            title={leaderboard.gameName}
            sessionDate={leaderboard.displayGameDate}
            players={topPlayers}
          />
        );
      })}
    </div>
  );
}

export default LeaderboardsDisplay;
