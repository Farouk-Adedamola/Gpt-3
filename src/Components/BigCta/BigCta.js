import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./BigCta.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 1rem;
  background-color: #000;
  border-radius: 40px;
  padding: 12px 45px 16px 45px;
`;

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
        <StyledButton>
          <Link to="/" className={classes.cta__section__btn}>
            Get Started
          </Link>
        </StyledButton>
      </section>
    </Fragment>
  );
};

export default BigCta;
