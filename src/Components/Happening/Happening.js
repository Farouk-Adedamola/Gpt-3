import React, { Fragment } from "react";
import classes from "./Happening.module.css";
import { firstBlog, secondBlog } from "./Happeninddata";
import { Link } from "react-router-dom";

const Happening = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Fragment>
      <section className={classes.Happening__section}>
        <h1>A lot is happening, We are blogging about it.</h1>
        <section className={classes.Happening__section__container}>
          <div className={classes.Happening__section__container__one}>
            {firstBlog.map((post) => {
              const { id, content, date, img } = post;
              return (
                <div key={id} className={classes.blog}>
                  <img src={img} alt="" />
                  <div className={classes.blog__container}>
                    <div className={classes.time}>
                      <p>{month[date.getMonth()]},</p>
                      <p>{date.getDate()}th</p>
                      <p>{date.getFullYear()}</p>
                    </div>
                    <h2>{content}</h2>
                    <Link to="/" className={classes.links}>
                      read full article
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.Happening__section__container__two}>
            {secondBlog.map((post) => {
              const { id, content, date, img } = post;
              return (
                <div key={id} className={classes.second__blog}>
                  <img src={img} alt="" />
                  <div className={classes.second__blog__container}>
                    <div className={classes.time}>
                      <p>{month[date.getMonth()]},</p>
                      <p>{date.getDate()}th</p>
                      <p>{date.getFullYear()}</p>
                    </div>
                    <h2>{content}</h2>
                    <Link to="/" className={classes.links}>
                      read full article
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Happening;
