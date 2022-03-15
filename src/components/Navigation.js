import usePermalinks from "../hooks/usePermalinks";

const link1 = "resource/unfoldingWord/en/tw/bible/kt/grace.md?search=mercy";
const link2 = "scripture/unfoldingWord/en/ult/master/tit/3/12";

export default function Navigation() {
  const { push, navigate } = usePermalinks({});
  console.log("Navigation");
  const handleNavigation = (e, link) => {
    e.preventDefault();
    navigate(link);
  };

  const handlePush = (e, link) => {
    e.preventDefault();
    push(link);
  };
  return (
    <>
      <h2>Permalinks library</h2>
      <p>
        Use the navigation section bellow or the address bar to test the
        library.
      </p>
      <p>Valid addresses:</p>
      <ul>
        <li>
          {
            '"{baseUrl}/scripture/{org}/{lang}/{resource}/{branch}/{book}/{chapter}/{verse}"'
          }
        </li>
        <li>{'"{baseUrl}/resource/{org}/{lang}/{resource}/{pathToFile}"'}</li>
      </ul>
      <h4>Regular Navigaton: </h4>
      <a href="#home" onClick={(e) => handleNavigation(e, "/")}>
        Home
      </a>
      {" | "}
      <a href="#link1" onClick={(e) => handleNavigation(e, link1)}>
        Go to resource
      </a>
      {" | "}
      <a href="#link2" onClick={(e) => handleNavigation(e, link2)}>
        Go to scripture
      </a>
      <br />
      <h4>Navigation through push: </h4>
      <a href="#home" onClick={(e) => handlePush(e, "/")}>
        Home
      </a>
      {" | "}
      <a href="#link1" onClick={(e) => handlePush(e, link1)}>
        Go to resource
      </a>
      {" | "}
      <a href="#link2" onClick={(e) => handlePush(e, link2)}>
        Go to scripture
      </a>
      <br />
      <br />
      <hr />
    </>
  );
}
