import React, { Fragment } from "react";
import { futureList } from "./Futuredata";
import classes from "./Future.module.css";
import { Link } from "react-router-dom";

const Future = () => {
  return (
    <Fragment>
      <section className={classes.future__container}>
        <div className={classes.future__section__one}>
          <h1>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <Link to="/" className={classes.future__links}>
            Request Early Access to Get Started
          </Link>
        </div>
        <div className={classes.future__container__inner}>
          <div className={classes.future__section__two}>
            {futureList.map((list) => {
              const { id, title, text } = list;
              return (
                <div key={id} className={classes.list}>
                  <div className={classes.list__container}>
                    <div className={classes.overline}></div>
                    <h2>{title}</h2>
                  </div>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Future;
