import { useMemo } from "react";
import { LeaderboardFormValues } from "@/types/types";
import { addOriginalIndex, sortPlayersByPlace } from "../helpers/playerHelpers";
import { formatDate } from "@/utils/formatDate";

interface PreviewProps {
  values: LeaderboardFormValues;
  touched: {
    title?: boolean;
    genre?: boolean;
    players?: { name?: boolean; score?: boolean; place?: boolean }[];
  };
}

function CreateLeaderboardPreview({ values, touched }: PreviewProps) {
  // Use helper functions to sort and preview players
  const playersWithIndex = addOriginalIndex(values.players);
  const sortedPlayers = sortPlayersByPlace(playersWithIndex);

  // Memoize the current date and format it
  const formattedDate = useMemo(() => {
    const today = new Date();
    return formatDate(today);
  }, []);

  return (
    <div className="relative w-4/12">
      <p className="absolute top-[-5px] 3xl:top-[-7px] 4xl:top-[-15px] left-1/2 transform -translate-x-1/2 -translate-y-full text-white-200 font-medium text-sm 3xl:text-lg 4xl:text-4xl">
        Preview
      </p>
      <div className="bg-primary-100 min-h-full">
        <div className="bg-gradient-to-b from-primary-300 to-primary-400 relative flex items-center justify-center h-20 3xl:h-24 4xl:h-48">
          <p className="absolute top-0 right-0 m-1 3xl:m-1.5 4xl:m-3 text-white-200 font-light text-xs 3xl:text-lg 4xl:text-4xl">
            <span>Latest:</span>
            <span> {formattedDate}</span>
          </p>
          <h3 className="text-center text-white-100 font-black text-xl 3xl:text-3xl 4xl:text-6xl">
            {values.title && touched.title ? values.title : "Leaderboard Title"}
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
              {sortedPlayers.map((player) => {
                // Use originalIndex to access the corresponding touched data
                const index = player.originalIndex;
                return (
                  <tr
                    key={index}
                    className="odd:bg-primary-200 even:bg-primary-100"
                  >
                    <td className="pl-3 py-1 3xl:pl-4 3xl:py-2 4xl:pl-9 4xl:py-3">
                      {(
                        touched.players &&
                        touched.players[index]?.place &&
                        values.players[index]?.place
                      ) ?
                        player.place
                      : "-"}
                    </td>
                    <td>
                      {(
                        touched.players &&
                        touched.players[index]?.name &&
                        values.players[index]?.name
                      ) ?
                        player.name
                      : "First Name Last Name"}
                    </td>
                    <td className="text-right pr-3 3xl:pr-4 4xl:pr-9">
                      {(
                        touched.players &&
                        touched.players[index]?.score &&
                        values.players[index]?.score
                      ) ?
                        player.score
                      : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CreateLeaderboardPreview;
