import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

type MenuProp = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<MenuProp> = ({ setIsOpen }) => {
  return (
    <aside className="fixed left-0 top-0 z-5 w-[30vw] bg-blue-400 dark:bg-emerald-900 h-screen">
      <div className="relative">
        {/* Close Menu Button */}
        <button
          className="m-2"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <IoMdClose size={20} />
        </button>

        {/* Links */}
        <div className="flex flex-col items-center">
          {/* Home page */}
          <Link to="/" tabIndex={0}>
            Blog
          </Link>
          {/* About page  */}
          <Link to="/about" tabIndex={0}>
            About
          </Link>
          {/* Contacts page */}
          <Link to="/contact" tabIndex={0}>
            Contacts
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
