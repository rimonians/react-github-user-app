import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/${item.login}`}>
      <div className={classes.card}>
        <div className={classes.cardImg}>
          <img src={item.avatar_url} alt="" />
        </div>
        <div className={classes.cardInfo}>
          <h3>{item.login}</h3>
        </div>
      </div>
    </Link>
  );
};
export default Card;
