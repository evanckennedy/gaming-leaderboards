import { useState } from "react";

interface LeaderboardSortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

function LeaderboardSortDropdown({
  value,
  onChange,
}: LeaderboardSortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "atoz", label: "A to Z" },
    { value: "ztoa", label: "Z to A" },
  ];

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      <button
        type="button"
        onClick={toggleModal}
        className="uppercase text-white-100 3xl:text-2xl 4xl:text-5xl hover:text-secondary transition-colors duration-300 ease-out cursor-pointer"
      >
        {options.find((option) => option.value === value)?.label}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-primary-500 mt-2 3xl:mt-3 4xl:mt-6">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="block w-full text-left uppercase text-white-100 3xl:text-2xl 4xl:text-5xl hover:bg-primary-400 transition-colors duration-300 ease-out px-4 3xl:px-6 4xl:px-12 py-2 3xl:py-3 4xl:py-6"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LeaderboardSortDropdown;
