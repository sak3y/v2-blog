import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col my-10 items-end">
      <Link to="/" className="underline text-violet-800 hover:text-violet-500 dark:text-violet-400">Return to Blog</Link>
    </footer>
  );
};

export default Footer;
