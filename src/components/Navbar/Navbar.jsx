import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Link to="/react-github-user-app">Github Users App</Link>
    </div>
  );
};
export default Navbar;
