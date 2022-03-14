export default function useRouteData({ route, routePath, queryObject }) {
  const routeMap = route?.path.reduce((prev, curr, index) => {
    console.log(curr);
    const catchAll = curr.startsWith("...");
    const pathName = catchAll ? curr.split("...")[1] : curr;
    const path = catchAll ? routePath.slice(index).join("/") : routePath[index];

    return { ...prev, [pathName]: path };
  }, {});
  console.log({ routeMap });
  return { routeData: { ...routeMap, ...queryObject }, isLoading: false };
}
