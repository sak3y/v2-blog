import { useContext } from "react";
import QueryContext from "../context/queryContext";

export const useQuery = () => {
  const context = useContext(QueryContext);
  if (!context) throw new Error("useQuery not used correctly");

  return context;
};
