import React, { Fragment } from "react";
import classes from "./Happening.module.css";
import { firstBlog, secondBlog } from "./Happeninddata";
import { Link } from "react-router-dom";

const Happening = () => {
  return (
    <Fragment>
      <section className={classes.Happening__section}>
        <h1>A lot is happening, We are blogging about it.</h1>
        <section className={classes.Happening__section__container}>
          <div className={classes.Happening__section__container__one}>
            {firstBlog.map((post) => {
              const { id, content, Date, img } = post;
              return (
                <div key={id} className={classes.blog}>
                  <img src={img} alt="" />
                  <div className={classes.blog__container}>
                    <p>{Date}</p>
                    <h2>{content}</h2>
                    <Link to="/">read full article</Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.Happening__section__container__two}></div>
        </section>
      </section>
    </Fragment>
  );
};

export default Happening;
