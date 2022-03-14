import { useContext, useEffect, useMemo, useState } from "react";
import { PermalinksContext } from "../context/PermalinksConfig";
import useLocation from "./useLocation";
import useRouteData from "./useRouteData";

export default function usePermalinks({ routes, config }) {
  const { pathArray: locationPath, queryObject, pushLocation } = useLocation();

  const { routes: contextRoutes, config: contextConfig } = useContext(
    PermalinksContext
  ); // TODO: Make contextRoutes the fallback if routes is not provided.

  const _routes = routes ?? contextRoutes; //use context if not routes provided

  const push = (path) => pushLocation({ path }, path);

  console.log(locationPath);

  const route = useMemo(
    () => _routes?.find((route) => locationPath?.includes(route.entry)),
    [_routes, locationPath]
  );

  const routePath = useMemo(
    () =>
      locationPath?.slice(
        locationPath?.findIndex((path) => path === route?.entry) + 1
      ),

    [route?.entry, locationPath]
  );

  console.log({ route, routePath });
  const { routeData, isLoading } = useRouteData({
    route,
    routePath,
    queryObject
  });

  return { data: routeData, isLoading, push };
}
