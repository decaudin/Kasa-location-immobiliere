import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./index.scss";

const Header = () => {
  const location = useLocation();  // Hook qui nous permettra de récupérer l'Url de la page d'arrivée

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo de Kasa" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="/"
              className={`link ${location.pathname === "/" ? "active" : ""}`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`link ${
                location.pathname === "/about" ? "active" : ""}`}
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
