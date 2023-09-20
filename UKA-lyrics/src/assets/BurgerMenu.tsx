import React, { useState } from "react";
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
          <React.Fragment>
            <Link to="/" onClick={toggleMenu}>
              <li>Forside</li>
            </Link>
            <Link to="/artists" onClick={toggleMenu}>
              <li>Artister</li>
            </Link>
            <Link to="/favourites" onClick={toggleMenu}>
              <li>Favoritter</li>
            </Link>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default BurgerMenu;
