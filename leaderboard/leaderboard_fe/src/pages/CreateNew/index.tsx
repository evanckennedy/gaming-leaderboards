import PageTitle from "@/components/ui/pageTitle/PageTitle";
import CreateLeaderboardForm from "@/features/createLeaderboards/components/CreateLeaderboardForm";

function CreateNew() {
  return (
    <>
      <div className="h-full flex flex-col gap-12 3xl:gap-20 4xl:gap-36">
        <PageTitle title="Create New Leaderboard" />
        <div className="flex-grow">
          <CreateLeaderboardForm />
        </div>
      </div>
    </>
  );
}

export default CreateNew;
