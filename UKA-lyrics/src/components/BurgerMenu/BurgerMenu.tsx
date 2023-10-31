import { Fragment, useState } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="menu">
        {isOpen && (
          <Fragment>
            <Link to="/project1" onClick={toggleMenu}>
              <li>Forside</li>
            </Link>
            <Link to="/project1/artists" onClick={toggleMenu}>
              <li>Artister</li>
            </Link>
            <Link to="/project1/favourites" onClick={toggleMenu}>
              <li>Favoritter</li>
            </Link>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

export default BurgerMenu;
