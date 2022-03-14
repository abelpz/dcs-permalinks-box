import { useEffect, useMemo, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState({ pathname: null, search: null });
  useEffect(() => {
    setLocation({
      pathname: window.location.pathname,
      search: window.location.search
    });
  }, []);

  const pathArray = useMemo(
    () => (location.pathname ? [...location.pathname.split("/")] : null),
    [location.pathname]
  );

  const queryObject = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    return { ...Object.fromEntries(queryParams?.entries()) };
  }, [location.search]);

  const pushLocation = ({ state, path }) => {
    const newLocation =
      window.location.origin + (path.startsWith("/") ? "" : "/") + path;
    window.location.assign(newLocation);
    // window.history.pushState(state, "", newLocation);
    // setLocation({
    //   ...location,
    //   pathname: window.location.pathname,
    //   search: window.location.search
    // });
  };
  return { pathArray, queryObject, pushLocation };
}
