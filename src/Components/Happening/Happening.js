import React, { Fragment } from "react";
import classes from "./Happening.module.css";
import { firstBlog, secondBlog } from "./Happeninddata";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Happeningsection = styled.section`
  width: 90vw;
  margin: 6rem auto 3rem auto;
  font-family: manrope;
  @media screen and (min-width: 1000px) {
    width: auto;
  }
`;

const H1 = styled.h1`
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 34px;
  font-weight: 800;
`;

const BlogContainer = styled.div`
  background: #042c54;
  margin-top: 0;
  padding: 25px 32px 24px 27px;
`;

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
      <Happeningsection className={classes.Happening__section}>
        <H1>A lot is happening, We are blogging about it.</H1>
        <section className={classes.Happening__section__container}>
          <div className={classes.Happening__section__container__one}>
            {firstBlog.map((post) => {
              const { id, content, date, img } = post;
              return (
                <div key={id} className={classes.blog}>
                  <img src={img} alt="" />
                  <BlogContainer className={classes.blog__container}>
                    <div className={classes.time}>
                      <p>{month[date.getMonth()]},</p>
                      <p>{date.getDate()}th</p>
                      <p>{date.getFullYear()}</p>
                    </div>
                    <h2>{content}</h2>
                    <Link to="/" className={classes.links}>
                      read full article
                    </Link>
                  </BlogContainer>
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
                  <BlogContainer className={classes.second__blog__container}>
                    <div className={classes.time}>
                      <p>{month[date.getMonth()]},</p>
                      <p>{date.getDate()}th</p>
                      <p>{date.getFullYear()}</p>
                    </div>
                    <h2>{content}</h2>
                    <Link to="/" className={classes.links}>
                      read full article
                    </Link>
                  </BlogContainer>
                </div>
              );
            })}
          </div>
        </section>
      </Happeningsection>
    </Fragment>
  );
};

export default Happening;
