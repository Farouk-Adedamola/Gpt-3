import React, { Fragment } from "react";
import classes from "./Gpt.module.css";
import { main, child } from "./Gptdata";

const Gpt = () => {
  return (
    <Fragment>
      <section className={classes.gpt__container}>
        <div className={classes.gpt__main}>
          {main.map((content) => {
            const { id, title, text } = content;
            return (
              <div key={id} className={classes.gpt__main__container}>
                <div className={classes.gpt__overline}></div>
                <h1>{title}</h1>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className={classes.gpt__explore}>
          <h1>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className={classes.gpt__child}>
          {child.map((content) => {
            const { id, title, text } = content;
            return (
              <div key={id}>
                <div className={classes.gpt__overline}></div>
                <h1>{title}</h1>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Gpt;
