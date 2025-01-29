import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <section className="logo">
        <Link to="/">ESSENTIAL SCENTS</Link>
      </section>
      <ul className="nav-links">
        <li>
          <Link to="/catalog">CATALOG</Link>
        </li>
        <li>
          <Link to="/refund-policy">REFUND POLICY</Link>
        </li>
        <li>
          <Link to="/signin">
            <span className="material-icons">person</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="material-icons">shopping_basket</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
