import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/buy">Buy</Link>
      <Link to="/sell">Sell</Link>
    </nav>
  );
}
export default NavBar;
