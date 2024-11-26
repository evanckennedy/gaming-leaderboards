import useSideMenuState from "./useSideMenuState";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import { NavBar } from "./NavBar";

function SideMenu() {
  const { isOpen, toggleMenu } = useSideMenuState();

  return (
    <div
      className={`${isOpen ? "col-span-2" : "col-span-1"} flex flex-col pb-12 pt-6 px-6  3xl:pb-20 3xl:pt-9 3xl:px-9 4xl:pb-36 4xl:pt-20 4xl:px-20`}
    >
      <button className="mb-12 3xl:mb-20 4xl:mb-36" onClick={toggleMenu}>
        <HamburgerMenuIcon />
      </button>

      {/* Conditionally render navbar only when `isOpen` is true */}
      {isOpen && <NavBar />}
    </div>
  );
}

export default SideMenu;
