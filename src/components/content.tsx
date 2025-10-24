import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase" 
import { useEffect, useState } from "react";
import Post from "./post";

type PostProp = {
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
      querySnapshot.forEach((doc) => {
    
        
        setPosts((prevPosts) => [
          ...prevPosts,
          {
            title: doc.data().title,
            dateMade: doc.data().dateMade,
            description: doc.data().description,
          },
        ]);

      });
    };

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
            dateMade={post.dateMade}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
