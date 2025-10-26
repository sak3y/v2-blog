import { Link } from "react-router-dom";

type PostObject = {
  title: string;
  dateMade: string;
  description: string;
};

const Post: React.FC<PostObject> = ({ title, dateMade, description }) => {
  return (
    <article className="flex flex-col p-2">
      {/* Post title */}
      <h2 className="tracking-tighter sm:text-4xl text-3xl text-fuchsia-900 dark:text-violet-400">
        <Link to={`post/${title}`}>{title}</Link>
      </h2>
      {/* // Date post was made */}
      <div className="tracking-tight text-lg font-semibold scale-y-110 mt-2 mb-4">{dateMade}</div>
      {/* Short description */}
      <p className="line-clamp-3 text-lg leading-tight">{description}</p>
    </article>
  );
};

export default Post;
