import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./BigCta.module.css";
import styled from "styled-components";

const StyledSection = styled.section`
  font-family: manrope;
  margin: 0 auto;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.7236px;
  padding: 1rem 0.5rem;
  overflow-x: hidden;

  @media screen and (min-width: 1000px) {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 57px 37px;
  }
`;

const CtaSectionContainer = styled.div`
  @media screen and (min-width: 760px) {
    width: 400px;
  }

  @media screen and (min-width: 1000px) {
    width: auto;
  }
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  background: #000;
  border-radius: 20px;
  padding: 12px 45px 16px 45px;
  transition: all 0.6s;
  &:hover {
    background: transparent;
    border: 2px solid #fff;
    border-radius: 20px;
  }
`;

const MainheaderText = styled.h1`
  @media screen and (min-width: 760px) {
    font-size: 20px;
    font-weight: 800;
    width: 400px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 24px;
  }
`;

const BigCta = () => {
  return (
    <Fragment>
      <StyledSection>
        <CtaSectionContainer>
          <Link to="/" className={classes.cta__section__container__btn}>
            Request Early Access to Get Started
          </Link>
          <MainheaderText>
            Register today & start exploring the endless possiblities.
          </MainheaderText>
        </CtaSectionContainer>
        <StyledButton>
          <Link to="/" className={classes.cta__section__btn}>
            Get Started
          </Link>
        </StyledButton>
      </StyledSection>
    </Fragment>
  );
};

export default BigCta;
