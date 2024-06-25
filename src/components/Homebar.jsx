import React from "react";
import { Link } from "react-router-dom";
import "./Homebar.css";

const Homebar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar-left">
        <Link to="/new-arrivals">New Arrivals</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/teen">Teen</Link>
        <Link to="/girls">Girls</Link>
        <Link to="/boys">Boys</Link>
        <Link to="/toddlers">Toddlers</Link>
        <Link to="/baby">Baby</Link>
        <Link to="/jeans-sale">Jeans Sale</Link>
      </div>
    </nav>
  );
};

export default Homebar;
