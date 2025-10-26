import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <Link to="/" className="underline">Return to Blog</Link>
    </footer>
  );
};

export default Footer;
