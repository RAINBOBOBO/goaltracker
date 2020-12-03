import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from '../auth/UserContext';

/**
 * Render Navbar 
 * 
 * App --> Navbar
 */

function Navbar() {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="Navigation navbar navbar-expand-md">
      NAVBAR
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item mr-4">
          <NavLink to="/goals">
            Goals
          </NavLink>
        </li>

        <li className="nav-item mr-4">
          <NavLink to="/signup">
            Sign Up
          </NavLink>
        </li>

        <li className="nav-item mr-4">
          <NavLink to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;