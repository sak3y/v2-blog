import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import { usePosts } from "../hooks/usePosts";
import Post from "../components/post";

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchResults() {
  const posts = usePosts(); // Post data hook

  const query = useQuery().get("q")?.toLowerCase() || "";

  const results = posts.posts.filter((item) => item.title.toLowerCase().includes(query));

  return (
    <div className="flex flex-col items-center max-w-[90vw] sm:max-w-[50vw] gap-4 mt-30">
      <h2 className="text-5xl font-black text-center italic">Search Results for "{query}"</h2>

      {/* If results are found */}
      {results.length > 0 ? (
        <ul className="flex flex-col gap-15 mt-10">
          {results.map((post) => (
            <Post
              id={post.id}
              title={post.title}
              dateMade={post.dateMade}
              description={post.description}
            />
          ))}
        </ul>
      ) : (
        <p className="text-xl font-semibold mt-10">No results found.</p>
      )}
      <Footer />
    </div>
  );
}

export default SearchResults;
