import { Link } from "react-router-dom";

export const NavBar = () => {
  const navItems = [
    { name: "Leaderboards", path: "/leaderboards" },
    { name: "Create New", path: "/create-new" },
    { name: "Users", path: "/users" },
    { name: "Sign In", path: "/sign-in" },
  ];

  return (
    <nav>
      <ul className="flex flex-col gap-12 3xl:gap-20 4xl:gap-36 text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl uppercase font-black">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="hover:text-secondary transition-colors duration-300 ease-out cursor-pointer"
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
