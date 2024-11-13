import useSideMenuState from "./useSideMenuState";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import { NavBar } from "./NavBar";

function SideMenu() {
  const { isOpen, toggleMenu } = useSideMenuState();

  return (
    <div
      className={`${isOpen ? "col-span-2" : "col-span-1"} flex flex-col px-4`}
    >
      <button className="mb-8" onClick={toggleMenu}>
        <HamburgerMenuIcon />
      </button>

      {/* Conditionally render navbar only when `isOpen` is true */}
      {isOpen && <NavBar />}
    </div>
  );
}

export default SideMenu;
