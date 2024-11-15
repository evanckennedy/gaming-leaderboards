import { Link } from "react-router-dom";
import BSDGamingLogo from "@/assets/images/leaderboard/Logo_BSDXRGamingLeaderboards.png";
import BSDGamingLogoNoText from "@/assets/images/leaderboard/Logo_BSDXRGamingLeaderboards_NoText.png";

function Header() {
  return (
    <header className="flex justify-between p-4 3xl:p-7 4xl:p-12">
      <figure className="transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
        <Link to="/">
          <img
            src={BSDGamingLogo}
            alt="BSD gaming logo"
            className="h-16 3xl:h-24 4xl:h-48"
          />
        </Link>
      </figure>
      <figure>
        <img
          src={BSDGamingLogoNoText}
          alt="BSD gaming logo, no text"
          className="h-16 3xl:h-24 4xl:h-48"
        />
      </figure>
    </header>
  );
}

export default Header;
