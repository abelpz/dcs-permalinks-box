import ReactJson from "react-json-view";
import usePermalinks from "../hooks/usePermalinks";

export default function Scripture() {
  const { data: permalink } = usePermalinks({});
  return (
    <>
      <h3>Scripture component</h3>
      <ReactJson src={permalink} />
    </>
  );
}
