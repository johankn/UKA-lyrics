import { useNavigate } from "react-router-dom";
import "./GoBackButton.css";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="goBackButton">
      <button onClick={() => navigate(-1)}>
        <span className="custom-arrow-icon">←</span>
      </button>
    </div>
  );
};

export default GoBackButton;
