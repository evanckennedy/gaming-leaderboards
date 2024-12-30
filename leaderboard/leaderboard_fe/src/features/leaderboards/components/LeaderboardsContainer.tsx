import LeaderboardsDisplay from "./LeaderboardsDisplay";
import LeaderboardSorter from "./LeaderboardSorter";
import CreateLeaderboardLink from "./CreateLeaderboardLink";
import { useSortedLeaderboards } from "../hooks/useSortedLeaderboards";

function LeaderboardsContainer() {
  const { sortedLeaderboards, setSortOption, refreshLeaderboards } =
    useSortedLeaderboards();

  return (
    <>
      <div className="flex justify-between mt-10 3xl:mt-14 4xl:mt-28 mb-3 3xl:mb-4 4xl:mb-9">
        <LeaderboardSorter setSortOption={setSortOption} />
        <CreateLeaderboardLink />
      </div>
      <LeaderboardsDisplay
        sortedLeaderboards={sortedLeaderboards}
        refreshLeaderboards={refreshLeaderboards}
      />
    </>
  );
}

export default LeaderboardsContainer;
