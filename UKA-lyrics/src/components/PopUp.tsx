import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PopUp.css";

const Popup = (props: { message: any; onClose: any; }) => {
  const { message, onClose } = props;

  const handleClick = () => {
    onClose();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500); // Closing the popup after 2,5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="popup" onClick={handleClick}>
      <Link to="/favourites" className="popup-link">{message}</Link>
      
    </div>
  );
};

export default Popup;
