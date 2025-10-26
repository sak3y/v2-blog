import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type NavProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavProps> = ({ setIsOpen, darkMode, setDarkMode }) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <header
      className={
        "fixed z-3 bg-white flex min-w-screen justify-center p-3 border-b-1 border-neutral-300"
      }
    >
      <nav className="flex min-w-[80vw] justify-between text-lg">
        {/* Nav left */}
        <div className="flex items-center">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <FiMenu size={16} />
          </button>
        </div>

        {/* Nav right */}
        <ul className="flex items-center gap-4">
          <li className="relative flex items-center ml-2">
            {/* Search button */}
            <button onClick={() => setIsSearching((prev) => !prev)} className="">
              <IoIosSearch />
            </button>
            {/* Input element */}
            {isSearching && (
              <input
                name="search"
                type="text"
                placeholder="Search..."
                autoFocus
                autoComplete="off"
                className="text-sm px-4 border-1"
              />
            )}
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/sheikh-rayhan-ahmed">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/sak3y?tab=repositories">
              <FaGithub />
            </a>
          </li>
          <li>
            <button onClick={() => setDarkMode((prev) => !prev)}>
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
