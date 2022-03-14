import { useEffect, useMemo, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState({ pathname: null, search: null });

  useEffect(() => {
    setLocation({
      pathname: window.location.pathname,
      search: window.location.search
    });
  }, [window?.location?.pathname]);

  const pathArray = useMemo(
    () => (location.pathname ? [...location.pathname.split("/")] : []),
    [location.pathname]
  );

  const queryObject = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    return { ...Object.fromEntries(queryParams?.entries()) };
  }, [location.search]);

  const navigateTo = ({ state, path }) => {
    const newLocation =
      window.location.origin + (path.startsWith("/") ? "" : "/") + path;
    window.location.assign(newLocation);
  };

  const pushLocation = ({ state, path }) => {
    const newLocation =
      window.location.origin + (path.startsWith("/") ? "" : "/") + path;
    window.history.pushState(state, "", newLocation);
    setLocation({
      pathname: window.location.pathname,
      search: window.location.search
    });
  };

  return { pathArray, queryObject, pushLocation, navigateTo };
}
