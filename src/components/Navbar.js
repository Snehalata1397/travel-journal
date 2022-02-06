import React from "react";
import { GiWorld } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="navbar">
      <GiWorld className="nav-logo" size="3em" />
      <h3> My Travel Journey</h3>
    </nav>
  );
}

export default Navbar;
