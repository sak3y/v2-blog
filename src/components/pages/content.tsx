import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import Post from "../post";

type PostProp = {
  id: string;
  title: string;
  dateMade: string;
  description: string;
};

const Content = () => {
  const [posts, setPosts] = useState<PostProp[]>([]);

  useEffect(() => {
    // Fetch data from firestore db
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts")); // Get posts from db

      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(fetchedPosts as PostProp[]);
    };

    fetchPosts();
  }, []);

  return (
    <div className={"flex flex-col items-center"}>
      <header className="font-bold my-15 text-center">
        <h1 className="text-5xl ">Blog</h1>
        <div className="mt-4 ">{posts.length} Posts</div>
      </header>

      <div className="max-w-[70vw]">
        {posts.map((post) => (
          <Post
            key={post.id}
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
