import { useNavigate } from "react-router-dom";
import cat from "./images/cat1.jpg";

export default function Cat() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Cat</p>
      <div
        onClick={() => {
          navigate("/dog");
        }}
      >
        <img src={cat} alt="Cat" />
      </div>
    </div>
  );
}
