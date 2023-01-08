import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
// import Hero from "../HeroSection/Hero";
import classes from "./Home.module.css";
import Companies from "../FeaturedCompanies/Companies";
import Gpt from "../WhatisGPT/Gpt";
import Future from "../Future/Future";
import BigCta from "../BigCta/BigCta";
import Happening from "../Happening/Happening";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <main className={classes.home__wrapper}>
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
            <BigCta />
            <Happening />
          </div>
        </section>
        <section className={classes.footer__section}>
          <Footer />
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
