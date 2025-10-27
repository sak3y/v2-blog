import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const SearchBar = () => {
  const { query, setQuery } = useQuery();
  const navigate = useNavigate(); // Allows user to redirect

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.length < 2) return;

    // Redirect url to new url with query in address
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <form onSubmit={handleSearch}>
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
        className="text-sm font-sans w-25 sm:w-50 px-1 border-1 focus:rounded-bl-none outline-0"
      />
    </form>
  );
};

export default SearchBar;
