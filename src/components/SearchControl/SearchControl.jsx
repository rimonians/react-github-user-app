import React from "react";
import classes from "./SearchControl.module.css";

const SearchControl = () => {
  return (
    <div className={classes.searchControl}>
      <input type="text" placeholder="Search by username" spellCheck="false" />
      <input type="submit" value="Search" />
    </div>
  );
};
export default SearchControl;
