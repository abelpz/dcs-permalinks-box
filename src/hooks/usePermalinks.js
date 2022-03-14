import { useContext, useEffect, useState } from "react";
import { PermalinksContext } from "../context/PermalinksConfig";
import useLocation from "./useLocation";
import useRouteData from "./useRouteData";

export default function usePermalinks({ routes, config }) {
  const { pathArray: locationPath, queryObject } = useLocation();
  const { routes: contextRoutes, config: contextConfig } = useContext(
    PermalinksContext
  ); // TODO: Make contextRoutes the fallback if routes is not provided.
  const [route, setRoute] = useState();
  const [routePath, setRoutePath] = useState();
  const { routeData, isLoading } = useRouteData({
    route,
    routePath,
    queryObject
  });

  useEffect(() => {
    setRoute(routes?.find((route) => locationPath?.includes(route.entry)));
  }, [routes, route, locationPath, queryObject]);

  useEffect(() => {
    setRoutePath(
      locationPath?.slice(
        locationPath?.findIndex((path) => path === route?.entry) + 1
      )
    );
  }, [route?.entry, locationPath]);

  return { data: routeData, isLoading };
}
