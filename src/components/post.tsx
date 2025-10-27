import { Link } from "react-router-dom";

type PostObject = {
  id: string;
  title: string;
  dateMade: string;
  description: string;
};

const Post: React.FC<PostObject> = ({ id, title, dateMade, description }) => {
  return (
    <article className="flex flex-col">
      {/* Post title */}
      <h2 className="tracking-tighter sm:text-4xl text-3xl text-violet-800 hover:text-violet-500 dark:text-violet-400">
        <Link to={`/posts/${id}`}>{title}</Link>
      </h2>
      {/* // Date post was made */}
      <div className="tracking-tight text-lg font-semibold scale-y-110 mt-2 mb-6">{dateMade}</div>
      {/* Short description */}
      <p className="line-clamp-3 text-lg leading-tight">{description}</p>
    </article>
  );
};

export default Post;
