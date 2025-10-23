type PostObject = {
  title: string;
  date: string;
  description: string;
};

const Post: React.FC<PostObject> = ({ title, date, description }) => {

  return (
    <article className="flex flex-col gap-4 p-4">
      <h2 className="text-4xl text-purple-800 tracking-tighter">{title}</h2>
      <div>{date}</div>
      <p>{description}</p>
    </article>
  );
};

export default Post;
