import React from "react";
import classes from "./PrintUser.module.css";

const PrintUser = ({ info }) => {
  return (
    <div className={classes.printUser}>
      <div className={classes.avatar}>
        <img src={info.avatar_url} alt="" />
        <p>{info.bio}</p>
        <h3>{info.name}</h3>
      </div>
      <div className={classes.info}>
        <p>
          <span>Location :</span> {info.location}
        </p>
        <p>
          <span>Public Repos :</span> {info.public_repos}
        </p>
        <p>
          <span>Public Gists :</span> {info.public_gists}
        </p>
        <p>
          <span>Followers :</span> {info.followers}
        </p>
        <p>
          <span>Following :</span> {info.following}
        </p>
      </div>
    </div>
  );
};
export default PrintUser;
