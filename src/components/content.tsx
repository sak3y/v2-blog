import { useEffect, useState } from "react";
import Post from "./post";

type PostProp = {
  title: string;
  date: string;
  description: string;
};

const Content = () => {
  const [posts, setPosts] = useState<PostProp[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {};
    // write fetch to firebase
    fetchPosts();
  }, []);

  const [postCount] = useState<number>(posts.length);

  return (
    <div className="flex flex-col items-center">
      <header className="font-bold my-15 text-center">
        <h1 className="text-5xl ">Blog</h1>
        <div className="mt-4 ">{postCount} Posts</div>
      </header>

      <div className="max-w-[70vw]">
        {posts.map((post) => (
          <Post
            key={post.title}
            title={post.title}
            date={post.date}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
