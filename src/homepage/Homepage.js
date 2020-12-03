import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../auth/UserContext";
import "./Homepage.css";

/**
 * Renders homepage of site
 * 
 * Routes at /
 * 
 * App --> Routes --> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
    <div className="Homepage">
      <div className="container text-center">
        HOMEPAGE
      </div>
    </div>
  )
}

export default Homepage;