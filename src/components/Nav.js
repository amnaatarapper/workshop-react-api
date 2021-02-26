import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cat">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/sunset">Sunset</NavLink>
        </li>
        <li>
          <NavLink to="/beach">Beach</NavLink>
        </li>
        <li>
          <NavLink to="/waterfall">Waterfall</NavLink>
        </li>
        <li>
          <NavLink to="/buildings">Building</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
