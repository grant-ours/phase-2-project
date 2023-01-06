import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/buy">Buy</Link>
      </div>
      <div className="link">
        <Link to="/sell">Sell</Link>
      </div>
    </nav>
  );
}
export default NavBar;