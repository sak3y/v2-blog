import { useEffect, useState } from "react";
import { Link } from "react-router";

const Post = () => {
  const [title, setTitle] = useState<string>("");

  const currDate = new Date();
  const [date, setDate] = useState<string>(currDate.toISOString());

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("");

        if (!res.ok) {
          console.log(res.status);
          return;
        }

        const data = res.json;

        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  return (
    <article>
      <h2>
        <Link>{title}</Link>
      </h2>
      <div>{date}</div>
      <p>{content}</p>
    </article>
  );
};

export default Post;
