import { useState } from "react";
import ReactJson from "react-json-view";
import usePermalinks from "./hooks/usePermalinks";
import "./styles.css";

const link1 =
  "resource/unfoldingWord/en/tw/bible/kt/jesus.md?check=Definition&hint=Replace with 'Facts'";
const link2 = "bible/unfoldingWord/en/master/tit/3/12";
export default function App() {
  const [routes, setRoutes] = useState([
    {
      entry: "resource", //the entry point for this route ({baseURL}/{entry}/{path})
      path: ["org", "lang", "resource", "...pathToFile"] //TODO: Allow adding a RegEx pattern to the array to match a path fragment: e.g. ,['org','path:[\w-_]+?/[\w-_]+?/[\w-_]+?.\w{1,3}']
    },
    {
      entry: "bible",
      path: ["org", "lang", "branch", "book", "chapter", "verse"]
    }
  ]);
  const { data: permalink, isLoading, push } = usePermalinks({
    routes
  });

  const handleClick = (e, link) => {
    e.preventDefault();
    push(link);
  };

  return (
    <>
      <ReactJson src={permalink} />
      <a href="#link1" onClick={(e) => handleClick(e, link1)}>
        Go to ({link1})
      </a>
      <br />
      <a href="#link2" onClick={(e) => handleClick(e, link2)}>
        Go to ({link2})
      </a>
      <br />
      <a href="#home" onClick={(e) => handleClick(e, "/")}>
        Home
      </a>
    </>
  );
}
