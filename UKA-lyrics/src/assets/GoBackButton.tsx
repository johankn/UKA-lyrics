import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBackButton.css";
import { MdArrowBack } from "react-icons/md"; // Import the Material Icons

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="goBackButton">
      <button onClick={() => navigate(-1)}>
        <MdArrowBack />
      </button>
    </div>
  );
};

export default GoBackButton;
