import Scripture from "./components/Scripture";
import Resource from "./components/Resource";
import PermalinksConfig from "./context/PermalinksConfig";
import usePermalinks from "./hooks/usePermalinks";
import "./styles.css";

const link1 = "resource/unfoldingWord/en/tw/bible/kt/grace.md?search=mercy";
const link2 = "scripture/unfoldingWord/en/ult/master/tit/3/12";

export default function App() {
  const { push } = usePermalinks({});

  const handleClick = (e, link) => {
    e.preventDefault();
    push(link);
  };
  console.log("APP");
  return (
    <>
      <a href="#home" onClick={(e) => handleClick(e, "/")}>
        Home
      </a>
      <br />
      <a href="#link1" onClick={(e) => handleClick(e, link1)}>
        Go to resource ({link1})
      </a>
      <br />
      <a href="#link2" onClick={(e) => handleClick(e, link2)}>
        Go to scripture ({link2})
      </a>

      {/* Permalinks with local config (see Resource component): */}
      <Resource />

      {/* Permalinks with global config: */}
      <PermalinksConfig
        routes={[
          {
            entry: "scripture",
            path: [
              "org",
              "lang",
              "resource",
              "branch",
              "book",
              "chapter",
              "verse"
            ]
          }
        ]}
      >
        <Scripture />
      </PermalinksConfig>
    </>
  );
}
