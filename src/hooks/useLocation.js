import { useEffect, useState } from "react";

export default function useLocation() {
  const [pathArray, setPathArray] = useState();
  const [queryObject, setQueryObject] = useState();

  useEffect(() => {
    const location = window.location;

    setPathArray(location.pathname.split("/"));

    const queryParams = new URLSearchParams(location.search);
    setQueryObject(Object.fromEntries(queryParams.entries()));
  }, []);

  const setLocation = ({ state, path }) => {
    window.history.pushState(state ?? { path }, "", path);
  };

  return { pathArray, queryObject, setLocation };
}
