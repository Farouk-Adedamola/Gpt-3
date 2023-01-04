import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
// import Hero from "../HeroSection/Hero";
import classes from "./Home.module.css";
import Companies from "../FeaturedCompanies/Companies";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.home}>
        <Navigation />
        <Companies />
      </div>
    </Fragment>
  );
};

export default Home;
