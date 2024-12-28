import { Leaderboard } from "@/types/types";
import { FormattedLeaderboardData } from "../helpers/leaderboardSorting";

interface MiniLeaderboardProps {
  leaderboard: FormattedLeaderboardData;
  topPlayers: { fullName: string; placement: number; score: number }[];
  onClick: () => void;
}

function MiniLeaderboard({
  leaderboard,
  topPlayers,
  onClick,
}: MiniLeaderboardProps) {
  return (
    <div
      onClick={onClick}
      className="transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
    >
      <div className="bg-gradient-to-b from-primary-300 to-primary-400 relative flex items-center justify-center h-16 3xl:h-24 4xl:h-48">
        <p className="absolute top-0 right-0 m-1 3xl:m-1.5 4xl:m-3 text-white-200 font-light text-xs 3xl:text-lg 4xl:text-4xl">
          <span>Latest:</span>
          <span> {leaderboard.displayGameDate}</span>
        </p>
        <h3 className="text-center px-4 3xl:px-4 4xl:px-9 text-white-100 font-black text-xl 3xl:text-3xl 4xl:text-6xl truncate">
          {leaderboard.gameName}
        </h3>
      </div>
      <div className="bg-primary-100 pb-4 3xl:pb-6 4xl:pb-12">
        <table className="text-white-100 w-full text-left text-sm 3xl:text-lg 4xl:text-4xl">
          <thead>
            <tr className="font-black">
              <th className="pl-3 py-2 3xl:pl-4 3xl:py-3 4xl:pl-9 4xl:py-6">
                Place
              </th>
              <th>Player</th>
              <th className="text-right pr-3 3xl:pr-4 4xl:pr-9">Score</th>
            </tr>
          </thead>
          <tbody>
            {topPlayers.map((player) => (
              <tr
                key={player.placement}
                className="odd:bg-primary-200 even:bg-primary-100"
              >
                {/* Use 'opacity-0' to hide placeholder rows while keeping the space */}
                <td
                  className={`pl-3 py-1 3xl:pl-4 3xl:py-2 4xl:pl-9 4xl:py-3 ${
                    player.fullName === "N/A" ? "opacity-0" : ""
                  }`}
                >
                  {player.placement}.
                </td>
                <td className={player.fullName === "N/A" ? "opacity-0" : ""}>
                  {player.fullName}
                </td>
                <td
                  className={`text-right pr-3 3xl:pr-4 4xl:pr-9 ${
                    player.fullName === "N/A" ? "opacity-0" : ""
                  }`}
                >
                  {player.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MiniLeaderboard;
