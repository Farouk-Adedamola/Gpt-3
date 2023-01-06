import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
// import Hero from "../HeroSection/Hero";
import classes from "./Home.module.css";
import Companies from "../FeaturedCompanies/Companies";
import Gpt from "../WhatisGPT/Gpt";
import Future from "../Future/Future";
// import MyApps from "../MyApps/MyApps";
import BigCta from "../BigCta/BigCta";

const Home = () => {
  return (
    <Fragment>
      <section className={classes.home__container}>
        <div className={classes.home__section__one}>
          <Navigation />
          <Companies />
          {/* <Gpt />w */}
        </div>
        <div className={classes.home__section__future}>
          <Future />
        </div>
        <div className={classes.section__two}>
          {/* <MyApps /> */}
          <BigCta />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
