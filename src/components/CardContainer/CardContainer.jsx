import React from "react";
import classes from "./CardContainer.module.css";
import Card from "../Card/Card";
import useUsers from "../../hooks/useUsers";

const CardContainer = () => {
  const { usersState } = useUsers();
  const { loading, copyData, err } = usersState;

  return (
    <div className={classes.cardContainer}>
      {loading && (
        <div className={classes.loading}>
          <h3>Loading...</h3>
        </div>
      )}
      {copyData.map((item) => (
        <Card key={Math.random()} item={item} />
      ))}
      {err && (
        <div className={classes.err}>
          <h3>Something went wrong</h3>
        </div>
      )}
    </div>
  );
};
export default CardContainer;
