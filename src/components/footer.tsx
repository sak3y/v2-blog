import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col my-10 items-end">
      <Link to="/" className="border-violet-500 hover:underline text-violet-800 dark:text-violet-400">Return to Blog</Link>
    </footer>
  );
};

export default Footer;
