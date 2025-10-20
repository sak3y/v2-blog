import { FaLinkedin } from "react-icons/fa";
import { IoIosMenu, IoIosSearch, IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="flex min-w-screen justify-center border-b-1 border-neutral-300 shadow-sm">
      <nav className="flex min-w-screen items-center justify-around p-2 text-xl ">
        {/* Nav left / menu*/}
        <div>
          <a href="">
            <IoIosMenu />
          </a>
        </div>
        {/* Nav right */}
        <ul className="flex gap-4">
          <li>
            <button>
              <IoIosSearch />
            </button>
          </li>
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <IoLogoGithub />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
