import LeaderboardsDisplay from "@/features/leaderboards/components/LeaderboardsDisplay";
import PageTitle from "@/components/ui/pageTitle/PageTitle";
import LeaderboardSorter from "@/features/leaderboards/components/LeaderboardSorter";
import CreateLeaderboardLink from "@/features/leaderboards/components/CreateLeaderboardLink";

function Leaderboards() {
  return (
    <>
      <PageTitle title="Leaderboards" />
      <div className="flex justify-between mt-10 3xl:mt-14 4xl:mt-28 mb-3 3xl:mb-4 4xl:mb-9">
        <LeaderboardSorter />
        <CreateLeaderboardLink />
      </div>
      <LeaderboardsDisplay />
    </>
  );
}

export default Leaderboards;
