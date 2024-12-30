import { FormattedLeaderboardData } from "../helpers/leaderboardSorting";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import IconTrash from "@/components/ui/icons/IconTrash";

interface FullLeaderboardModalProps {
  leaderboard: FormattedLeaderboardData;
  onClose: () => void;
  handleConfirmDelete: () => void;
}

function FullLeaderboardModal({
  leaderboard,
  onClose,
  handleConfirmDelete,
}: FullLeaderboardModalProps) {
  // Access roleName from the Redux store
  const roleName = useSelector((state: RootState) => state.user.roleName);

  // sort players by placement
  const players = [...leaderboard.players].sort(
    (a, b) => a.placement - b.placement,
  );

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black-100 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative bg-primary-100 h-3/4 w-3/12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-b from-primary-300 to-primary-400 relative flex items-center justify-center h-20 3xl:h-24 4xl:h-48">
          <p className="absolute top-0 right-0 m-1 3xl:m-1.5 4xl:m-3 text-white-200 font-light text-xs 3xl:text-lg 4xl:text-4xl">
            <span>Latest:</span>
            <span> {leaderboard.displayGameDate}</span>
          </p>

          <h3 className="px-4 3xl:px-4 4xl:px-9 text-center text-white-100 font-black text-xl 3xl:text-3xl 4xl:text-6xl truncate">
            {leaderboard.gameName}
          </h3>
        </div>
        <div className="bg-primary-100">
          <table className="text-white-100 w-full text-left text-sm 3xl:text-lg 4xl:text-4xl">
            <thead>
              <tr className="font-black">
                <th
                  className="pl-3 py-2 3xl:pl-4 3xl:py-3 4xl:pl-9 4xl:py-6"
                  style={{ width: "20%" }}
                >
                  Place
                </th>
                <th style={{ width: "55%" }}>Player</th>
                <th
                  className="text-right pr-3 3xl:pr-4 4xl:pr-9"
                  style={{ width: "25%" }}
                >
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr
                  key={index}
                  className="odd:bg-primary-200 even:bg-primary-100"
                >
                  <td className="pl-3 py-1 3xl:pl-4 3xl:py-2 4xl:pl-9 4xl:py-3">
                    {player.placement}
                  </td>
                  <td>{player.fullName}</td>
                  <td className="text-right pr-3 3xl:pr-4 4xl:pr-9">
                    {player.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {roleName === "Root" && (
          <button type="button" onClick={handleConfirmDelete}>
            <IconTrash className="absolute bottom-0 right-0 m-3 3xl:m-4 4xl:m-9 w-auto h-5 3xl:h-8 4xl:h-16 fill-current text-white-100 hover:text-error-100 transition-colors duration-300 ease-out" />
          </button>
        )}
      </div>
    </div>
  );
}

export default FullLeaderboardModal;
