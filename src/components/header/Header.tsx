import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="/" className="header__logo">
            RecipeBook
          </a>

          <nav className="header__nav">
            <ul className="header__nav-items">
              <li className="header__nav-item">
                <a href="/">Home</a>
              </li>
              <li className="header__nav-item">
                <a href="/">Favorites</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
