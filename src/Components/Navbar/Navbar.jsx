import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ padding: "0.5rem 1rem" }}>
      <h1>Navbar</h1>
      <div>
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>
      <div>
      <h1><Link data-cy="navbar-home-link" to="/">
          Home
        </Link>
        </h1>
        <Link data-cy="navbar-home-link" to="/shoes">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
