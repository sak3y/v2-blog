import { createContext, useState } from "react";

type QueryType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const QueryContext = createContext<QueryType | null>(null); //Create a variable that

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>("");

  const value = { query, setQuery };

  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};
export default QueryContext;
/* 
    GOAL: 
    - Search our posts and return the ones which matcch our query

    PROC:
    - Make a querycontext so query is global.
    - On enter in searchbar, user is redirected 
    
    - have it so that whne a user enter a search and hits eneter,
    filter is used on posts and queries that match r displayed

 */
