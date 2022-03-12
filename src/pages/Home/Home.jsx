import React from "react";
import classes from "./Home.module.css";
import Heading from "../../components/Heading/Heading";
import CardContainer from "../../components/CardContainer/CardContainer";

const Home = () => {
  return (
    <>
      <Heading>Users List</Heading>
      <CardContainer />
    </>
  );
};
export default Home;
