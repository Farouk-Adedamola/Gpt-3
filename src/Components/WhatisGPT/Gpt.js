import React, { Fragment } from "react";
import classes from "./Gpt.module.css";
import { main, child } from "./Gptdata";
import { Link } from "react-router-dom";

const Gpt = () => {
  return (
    <Fragment>
      <article className={classes.gpt}>
        <section className={classes.gpt__container}>
          <div className={classes.gpt__main}>
            {main.map((content) => {
              const { id, title, text } = content;
              return (
                <div key={id} className={classes.gpt__main__container}>
                  <div className={classes.gpt__main__container__title}>
                    <div className={classes.gpt__overline}></div>
                    <h1>{title}</h1>
                  </div>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
          <div className={classes.gpt__explore}>
            <h1>The possibilities are beyond your imagination</h1>
            <p>
              <Link to="home" className={classes.gpt__explore__link}>
                Explore The Library
              </Link>
            </p>
          </div>
          <div className={classes.gpt__child}>
            {child.map((content) => {
              const { id, title, text } = content;
              return (
                <div key={id} className={classes.gpt__child__container}>
                  <div className={classes.gpt__child__container__title}>
                    <div className={classes.gpt__overline}></div>
                    <h1>{title}</h1>
                  </div>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </Fragment>
  );
};

export default Gpt;
