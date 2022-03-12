import React, { useState } from "react";
import classes from "./Search.module.css";
import { useNavigate } from "react-router-dom";

const Search = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = () => {
    handleSearch(searchInput);
    navigate(`../${searchInput}`);
  };

  return (
    <div className={classes.search}>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Search user by name"
        onChange={handleChange}
        spellCheck="false"
      />
      <input
        className={classes.searchBtn}
        type="submit"
        value="Search"
        onClick={handleSubmit}
      />
    </div>
  );
};
export default Search;
