import { Link } from "react-router-dom";

function CreateLeaderboardLink() {
  return (
    <div className="uppercase text-white-100 font-black 3xl:text-2xl 4xl:text-5xl hover:text-secondary transition-colors duration-300 ease-out cursor-pointer">
      <Link to="/create-new">
        <p>+ Create new leaderboard</p>
      </Link>
    </div>
  );
}

export default CreateLeaderboardLink;
