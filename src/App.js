import { useState } from "react";
import ReactJson from "react-json-view";
import usePermalinks from "./hooks/usePermalinks";
import "./styles.css";

export default function App() {
  const [routes, setRoutes] = useState([
    {
      entry: "pl", //the entry point for this route ({baseURL}/{entry}/{path})
      path: ["org", "lang", "resource", "pathToFile"] //TODO: Allow adding a RegEx pattern to the array to match a path fragment: e.g. ,['org','path:[\w-_]+?/[\w-_]+?/[\w-_]+?.\w{1,3}']
    }
  ]);
  const { data: permalink, isLoading } = usePermalinks({
    routes
  });
  return <ReactJson src={permalink} />;
}
