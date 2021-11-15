import React from "react";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo-alta-header.png";

function Header() {
  return (
    <header>
      <div className={classes["header-container"]}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={classes["myList-nav"]}>
          <li>
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              to="/"
              exact
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              to="/news"
            >
              NEWS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
