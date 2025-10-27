import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const SearchBar = ({ isSearching }: { isSearching: boolean }) => {
  const { query, setQuery } = useQuery(); // Query hooks that holds user's input
  const navigate = useNavigate(); // Allows user to redirect

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.length < 2) return;

    // Redirect url to new url with query in address
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        name="search"
        type="text"
        placeholder="Search..."
        autoFocus
        autoComplete="off"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className={`placeholder:text-zinc-500 text-sm font-sans border px-2 focus:outline-none
    transform origin-left transition-all duration-300 
    ${
      isSearching ? "scale-x-100 w-28 sm:w-52 border" : "scale-x-0 w-0 border-0 pointer-events-none"
    }`}
      />
    </form>
  );
};

export default SearchBar;
