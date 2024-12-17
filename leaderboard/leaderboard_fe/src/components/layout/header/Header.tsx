import { Link } from "react-router-dom";
import LeaderboardGamingLogo from "@/assets/images/leaderboard/Logo_GamingLeaderboards.png";
import LeaderboardGamingLogoNoText from "@/assets/images/leaderboard/Logo_GamingLeaderboards_NoText.png";
import UserStatus from "@/features/authentication/components/UserStatus";

function Header() {
  return (
    <header className="flex justify-between p-4 3xl:p-7 4xl:p-12">
      <figure className="transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
        <Link to="/">
          <img
            src={LeaderboardGamingLogo}
            alt="Leaderboard gaming logo"
            className="h-16 3xl:h-24 4xl:h-48"
          />
        </Link>
      </figure>
      <div className="flex gap-6 3xl:gap-9 4xl:gap-16">
        <UserStatus />
        <figure>
          <img
            src={LeaderboardGamingLogoNoText}
            alt="Leaderboard gaming logo, no text"
            className="h-16 3xl:h-24 4xl:h-48"
          />
        </figure>
      </div>
    </header>
  );
}

export default Header;
