import React, { useEffect } from "react";
import classes from "./View.module.css";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";
import PrintUser from "../../components/PrintUser/PrintUser";

const View = () => {
  const { userState, fetchData } = useUser();
  const { loading, copyData, err } = userState;
  const params = useParams();
  const { username } = params;

  useEffect(() => {
    fetchData(username);
  }, []);

  return (
    <>
      <Heading>User Info</Heading>
      <Search handleSearch={fetchData} />
      {loading && (
        <div className={classes.loading}>
          <h3>Loading...</h3>
        </div>
      )}
      {copyData && <PrintUser info={copyData} />}
      {err && (
        <div className={classes.err}>
          <h3>Something went wrong may be user not found</h3>
        </div>
      )}
    </>
  );
};
export default View;
