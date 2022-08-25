import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/buy">
        Buy
      </Link>
      <Link className="link" to="/sell">
        Sell
      </Link>
    </nav>
  );
}
export default NavBar;
