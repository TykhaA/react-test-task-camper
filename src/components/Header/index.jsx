import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <li className="header__item">
            <NavLink to="/" className="header__link">
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="catalog" className="header__link">
              Catalog
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="favorites" className="header__link">
              Favorites
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
