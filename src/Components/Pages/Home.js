import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
// import Hero from "../HeroSection/Hero";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.home}>
        <Navigation />
      </div>
    </Fragment>
  );
};

export default Home;
