import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
// import Hero from "../HeroSection/Hero";
import classes from "./Home.module.css";
import Companies from "../FeaturedCompanies/Companies";
import Gpt from "../WhatisGPT/Gpt";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.home}>
        <Navigation />
        <Companies />
        <Gpt />
      </div>
    </Fragment>
  );
};

export default Home;
