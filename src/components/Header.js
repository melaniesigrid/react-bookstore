import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <nav className="NavBar">
        <h1 className="Title">
          <NavLink to="/react-bookstore/" rel="noopener noreferrer">
            Bookstore CMS
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/react-bookstore/" rel="noopener noreferrer">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/Categories/" rel="noopener noreferrer">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
