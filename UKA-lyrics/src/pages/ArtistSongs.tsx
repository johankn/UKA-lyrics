import { useParams } from "react-router-dom";

function Artists () {
  const { trackId } = useParams();
  return <h1>{trackId}</h1>;
}

export default Artists;