import { useState } from "react";

function useSideMenuState() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleMenu };
}

export default useSideMenuState;
