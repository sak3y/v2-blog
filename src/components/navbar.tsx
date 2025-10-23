import { FaLinkedin } from "react-icons/fa";
import { FiGithub, FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

type MenuProp = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<MenuProp> = ({ setIsOpen }) => {
  const toggleDark = () => {};



  return (
    <header className="flex min-w-screen justify-center p-3 border-b-1 border-neutral-300">
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
          <li>
            <button onClick={() => {}}>
              <IoIosSearch />
            </button>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/sheikh-rayhan-ahmed">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/sak3y?tab=repositories">
              <FiGithub />
            </a>
          </li>
          <li>
            <button onClick={toggleDark}>
              <MdDarkMode />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
