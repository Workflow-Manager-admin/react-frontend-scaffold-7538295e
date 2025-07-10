import React from "react";
import { Link, NavLink } from "react-router-dom";

// PUBLIC_INTERFACE
function Header() {
  /** Header navigation bar with app name and links. */
  return (
    <header className="header">
      <nav className="navbar container">
        <span className="brand">ReactKavia</span>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/tictactoe" activeclassname="active">
              Tic Tac Toe
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
