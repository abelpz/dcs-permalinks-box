import Scripture from "./components/Scripture";
import Resource from "./components/Resource";
import PermalinksConfig from "./context/PermalinksConfig";
import usePermalinks from "./hooks/usePermalinks";
import "./styles.css";
import { useState } from "react";
import Navigation from "./components/Navigation";

export default function App() {
  const [appState, setAppState] = useState();

  const handleChangeData = (e) => {
    setAppState({
      org: "BCS",
      lang: "hi",
      resource: "tw",
      pathToFile: "bible/name/moses.md"
    });
    // setOrg("BCS");
    // setLang("hi");
    // setResource("tw");
    // setPathToFile("bible/name/moses.md");
  };

  console.log("APP");
  return (
    <>
      <Navigation />
      {/* Permalinks with local config (see Resource component): */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Resource
          appContext={{
            ...appState
          }}
        />

        {/* Permalinks with global config: */}
        <PermalinksConfig
          routes={[
            {
              entry: "scripture",
              path: "org/lang/resource/branch/book/chapter/verse".split("/")
            }
          ]}
          id={"scripture"}
        >
          <Scripture />
        </PermalinksConfig>
      </div>
    </>
  );
}
