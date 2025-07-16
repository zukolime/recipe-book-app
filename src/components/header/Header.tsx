import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            RecipeBook
          </Link>

          <nav className="header__nav">
            <ul className="header__nav-items">
              <li className="header__nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/my-favorites" href="/">
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
