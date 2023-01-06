import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./BigCta.module.css";

const BigCta = () => {
  return (
    <Fragment>
      <section className={classes.cta__section}>
        <div className={classes.cta__section__container}>
          <Link to="/" className={classes.cta__section__container__btn}>
            Request Early Access to Get Started
          </Link>
          <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <button className={classes.cta__section__btn__container}>
          <Link to="/" className={classes.cta__section__btn}>
            Get Started
          </Link>
        </button>
      </section>
    </Fragment>
  );
};

export default BigCta;
