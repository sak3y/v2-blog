import { useQuery } from "../hooks/useQuery";

const SearchBar = () => {
  const { query, setQuery } = useQuery();
  // Redirect with search results
  const handleSearch = () => {
    console.log(query);
  };
  return (
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
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch();
      }}
      className="text-sm font-sans w-25 sm:w-50 px-1 border-1 focus:rounded-bl-none outline-0"
    />
  );
};

export default SearchBar;
