export const NavBar = () => (
  <nav>
    <ul className="flex flex-col gap-8 text-white text-2xl uppercase font-black">
      <li className="hover:text-brightOrange transition-colors duration-300 ease-out cursor-pointer">
        Leaderboards
      </li>
      <li className="hover:text-brightOrange transition-colors duration-300 ease-out cursor-pointer">
        Create New
      </li>
      <li className="hover:text-brightOrange transition-colors duration-300 ease-out cursor-pointer">
        Users
      </li>
      <li className="hover:text-brightOrange transition-colors duration-300 ease-out cursor-pointer">
        Sign In
      </li>
    </ul>
  </nav>
);
