import { Link } from "react-router-dom";

const FullPost = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto text-dark-text">
      <Link to="/" className="text-sky-400 hover:underline">
        ← Back
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{}</h1>
      <p className="leading-relaxed">{}</p>
    </div>
  );
};

export default FullPost;
