type PostObject = {
  title: string;
  dateMade: string;
  description: string;
};

const Post: React.FC<PostObject> = ({ title, dateMade, description }) => {

  return (
    <article className="flex flex-col gap-4 p-4">
      <h2 className="text-4xl text-purple-800 tracking-tighter">{title}</h2>
      <div>{dateMade}</div>
      <p>{description}</p>
    </article>
  );
};

export default Post;
