import { useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

import Footer from "../components/footer";

const PostPage = () => {
  const { id } = useParams(); // Gets the id from the dynamic part of the url
  const { posts } = usePosts(); // hook to get post data

  const post = posts.find((p) => p.id === id); // Searches the url for the post id

  if (!post) return <div className="text-center mt-20">Loading...</div>; // Error handle

  return (
    <div className="max-w-[90vw] sm:max-w-[50vw] mt-30">
      <div className="">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">{post.dateMade}</p>
        <p className="leading-relaxed">{post.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
