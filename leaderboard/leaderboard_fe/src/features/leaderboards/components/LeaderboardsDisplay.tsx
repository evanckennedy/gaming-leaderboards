import MiniLeaderboard from "./MiniLeaderboard";

function LeaderboardsDisplay() {
  return (
    <div className="grid grid-cols-3 gap-6 3xl:gap-9 4xl:gap-20">
      <MiniLeaderboard />
      <MiniLeaderboard />
      <MiniLeaderboard />
      <MiniLeaderboard />
      <MiniLeaderboard />
      <MiniLeaderboard />
    </div>
  );
}

export default LeaderboardsDisplay;
