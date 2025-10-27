import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import SearchBar from "./searchBar";

type NavProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavProps> = ({ setIsOpen, darkMode, setDarkMode }) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Toggle dark theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header
      className={
        "fixed z-3 bg-white dark:bg-zinc-900 flex min-w-screen justify-center p-3 border-b-1 border-zinc-300 dark:border-zinc-700"
      }
    >
      <nav className="flex min-w-[80vw] justify-between text-xl">
        {/* Nav left */}
        <div className="flex items-center">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <FiMenu size={18} />
          </button>
        </div>

        {/* Nav right */}
        <ul className="flex items-center gap-4 h-8">
          
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
          <li className="relative flex items-center gap-2">
            {/* Search button */}
            <button onClick={() => setIsSearching((prev) => !prev)}>
              <IoIosSearch />
            </button>
            {/* Input element */}
            <SearchBar isSearching={isSearching}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
