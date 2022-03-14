export default function useRouteData({ route, routePath, queryObject }) {
  const routeMap = route?.path.reduce((prev, curr, index) => {
    return { ...prev, [curr]: routePath[index] };
  }, {});
  console.log({ routeMap });
  return { routeData: { ...routeMap, ...queryObject }, isLoading: false };
}
