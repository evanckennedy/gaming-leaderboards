export const NavBar = () => {
  const navItems = ["Leaderboards", "Create New", "Users", "Sign In"];

  return (
    <nav>
      <ul className="flex flex-col gap-12 3xl:gap-14 4xl:gap-32 text-white text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black">
        {navItems.map((item) => (
          <li
            key={item}
            className="hover:text-brightOrange transition-colors duration-300 ease-out cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
