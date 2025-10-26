import Footer from "../components/footer";
import Post from "../components/post";
import { usePosts } from "../context/postsContext";

const Content = () => {
  const { posts } = usePosts(); // Posts context

  return (
    <div className="flex flex-col items-center">
      <header className="font-extrabold mt-30 mb-10 text-center">
        <h1 className="text-5xl tracking-tight italic">Blog</h1>
        <div className="text-xl mt-6">{posts.length} Posts</div>
      </header>

      <div className="flex flex-col gap-10 max-w-[95vw] sm:max-w-[50vw]">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            dateMade={post.dateMade}
            description={post.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Content;
