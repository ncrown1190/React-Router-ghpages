import { useNavigate } from "react-router-dom";
import dog from "./images/dog1.jpg";

export default function Dog() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Dog</p>
      <div
        onClick={() => {
          navigate("/cat");
        }}
      >
        <img src={dog} alt="DOG" />
      </div>
    </div>
  );
}
