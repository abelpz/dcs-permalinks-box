import { useContext, useEffect, useMemo, useState } from "react";
import { PermalinksContext } from "../context/PermalinksConfig";
import useLocation from "./useLocation";
import useRouteData from "./useRouteData";

export default function usePermalinks({ routes, config, id }) {
  const { pathArray, queryObject, pushLocation, navigateTo } = useLocation();

  const {
    routes: contextRoutes,
    config: contextConfig,
    id: contextId
  } = useContext(PermalinksContext); // TODO: Make contextRoutes the fallback if routes is not provided.

  const _id = id ?? contextId;
  const _routes = routes ?? contextRoutes; //use context if not routes provided

  const push = (path) => pushLocation({ path }, path);
  const navigate = (path) => navigateTo({ path });

  const [locationPath, setLocationPath] = useState();

  useEffect(() => {
    setLocationPath([...pathArray]);
  }, [pathArray]);

  const route = _routes?.find((route) => locationPath?.includes(route.entry));

  const routePath = locationPath?.slice(
    locationPath?.findIndex((path) => path === route?.entry) + 1
  );

  const { routeData, isLoading } = useRouteData({
    route,
    routePath,
    queryObject
  });

  return { data: routeData, isLoading, push, navigate };
}
