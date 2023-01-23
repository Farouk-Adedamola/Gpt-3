import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
// import Hero from "../HeroSection/Hero";
import Companies from "../FeaturedCompanies/Companies";
import Gpt from "../WhatisGPT/Gpt";
import Future from "../Future/Future";
import BigCta from "../BigCta/BigCta";
import Happening from "../Happening/Happening";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Homecontainer = styled.div`
  background: -moz-radial-gradient(
    circle at 5% 25%,
    rgba(7, 50, 95, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle at 5% 25%,
    rgba(7, 50, 95, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );
  background: -o-radial-gradient(
    circle at 5% 25%,
    rgba(7, 50, 95, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );
  background: -ms-radial-gradient(
    circle at 5% 25%,
    rgba(7, 50, 95, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );
  background: radial-gradient(
    circle at 5% 25%,
    rgba(7, 50, 95, 1) 0%,
    rgba(4, 12, 24, 1) 100%
  );
`;

const HomeSection = styled.div`
  padding: 20px 20px;

  @media screen and (min-width: 1000px) {
    padding: 20px 80px;
  }

  @media screen and (min-width: 1200px) {
    padding: 35px 135px;
  }
`;

const Footersection = styled.section`
  background: #031b34;
`;

const Home = () => {
  return (
    <Fragment>
      <HomeWrapper>
        <Homecontainer>
          <HomeSection>
            <Navigation />
            <Companies />
            <Gpt />
          </HomeSection>
          <HomeSection>
            <Future />
          </HomeSection>
          <HomeSection>
            <BigCta />
            <Happening />
          </HomeSection>
        </Homecontainer>
        <Footersection>
          <Footer />
        </Footersection>
      </HomeWrapper>
    </Fragment>
  );
};

export default Home;
