import { useContext } from "react";
import PostsContext from "../context/postsContext";

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) throw new Error("usePosts not used correctly");

  return context;
};
