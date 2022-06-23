import { useParams, useSearchParams } from "react-router-dom";

export default function Store() {
  //const id = useParams().id;
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  return (
    <h1>
      This is Store Number: {id} and you are searching for color:
      {searchParams.get("color")}
    </h1>
  );
}
