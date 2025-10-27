import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

type Post = {
  id: string;
  title: string;
  dateMade: string;
  description: string;
};

type PostsContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined); // Create an object with special props

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from firebase
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];

      setPosts(fetchedPosts); // Update state with new values
    };

    fetchPosts();
  }, []);

  // Using provider property to pass down values to create a react component that passed down vallues 
  // Allow children to access those values
  return <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>;
};

export default PostsContext;
