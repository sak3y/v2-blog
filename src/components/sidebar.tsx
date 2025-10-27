import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

type MenuProp = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<MenuProp> = ({ isOpen, setIsOpen }) => {
  return (
    <aside
      aria-hidden={!open}
      className={`fixed left-0 top-0 z-5 sm:w-50 w-[40vw] text-white dark:text-black bg-emerald-900 dark:bg-blue-300 h-screen duration-150 ${
        isOpen ? "translate-x-0" : "-translate-x-100"
      }`}
    >
      <div className="">
        {/* Close Menu Button */}
        <button
          className="p-2 m-2 text-white duration-150"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <IoMdClose size={20} />
        </button>

        {/* Links */}
        <div className="grid">
          {/* Home page */}
          <Link to="/" className="nav-child" tabIndex={0}>
            Blog
          </Link>
          {/* About page  */}
          <Link to="/about" className="nav-child" tabIndex={0}>
            About
          </Link>
          {/* Contacts page */}
          <Link to="/contact" className="nav-child" tabIndex={0}>
            Contact
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
