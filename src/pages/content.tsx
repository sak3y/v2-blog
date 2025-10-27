import Post from "../components/post";
import { usePosts } from "../hooks/usePosts";


const Content = () => {
  const { posts } = usePosts(); // Hook for posts

  if (!posts) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="flex flex-col items-center">
      <header className="font-extrabold mt-30 mb-10 text-center">
        <h1 className="text-4xl tracking-tight">Rayhan's Blog</h1>
        <div className="text-xl mt-6">{posts.length} Posts</div>
      </header>

      <div className="flex flex-col gap-15 max-w-[90vw] sm:max-w-[50vw]">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            dateMade={post.dateMade}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
