import { useEffect, useMemo } from "react";
import ReactJson from "react-json-view";
import usePermalinks from "../hooks/usePermalinks";

export default function Resource({ appContext }) {
  const { org, lang, resource, pathToFile } = appContext;
  const routes = useMemo(
    () => [
      {
        entry: "resource", //the entry point for this route ({baseURL}/{entry}/{path})
        path: ["org", "lang", "resource", "...pathToFile"], //TODO: Allow adding a RegEx pattern to the array to match a path fragment: e.g. ,['org','path:[\w-_]+?/[\w-_]+?/[\w-_]+?.\w{1,3}']
        context: { org, lang, resource, pathToFile }
      }
    ],
    [org, lang, resource, pathToFile]
  );

  const { data: permalink } = usePermalinks({
    routes,
    id: "resource"
  });
  return (
    <div>
      <h3>Resource component</h3>
      <ReactJson src={permalink} />
    </div>
  );
}
