import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/GPT-3.svg";
import { footerLinks } from "./Footerdata";
import styled from "styled-components";

const Footersection = styled.section`
  padding: 2rem 3rem 1rem 2rem;
  font-family: manrope;
  @media screen and (min-width: 1000px) {
    padding: 120px 80px 10px 80px;
  }
  @media screen and (min-width: 1200px) {
    padding: 175px 208px 10px 208px;
  }
`;

const FootersectionHeadtext = styled.h1`
  font-size: 34px;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  @media screen and (min-width: 1000px) {
    font-size: 62px;
    font-weight: 800;
  }
`;

const FootersectionButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  padding: 2rem 3rem;
  background: transparent;
  border-color: #fff;
`;

const Footer = () => {
  const time = new Date();
  let year = time.getFullYear();
  return (
    <Fragment>
      <Footersection>
        <FootersectionHeadtext>
          Do you want to step in to the future before others
        </FootersectionHeadtext>
        <FootersectionButton>
          <Link to="/" className={classes.first__link}>
            Request Early Access
          </Link>
        </FootersectionButton>
        <main className={classes.footer__section__main}>
          <div className={classes.main__section__main__one}>
            <img src={Logo} alt="gptLogo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className={classes.main__section__main__two}>
            {footerLinks.map((link) => {
              const { id, title, one, two, three, four, path } = link;
              return (
                <div key={id} className={classes.link__container}>
                  <p>{title}</p>
                  <div className={classes.link__container__links}>
                    <Link to={path} className={classes.links}>
                      {one}
                    </Link>
                    <Link to={path} className={classes.links}>
                      {two}
                    </Link>
                    <Link to={path} className={classes.links}>
                      {three}
                    </Link>
                    <Link to={path} className={classes.links}>
                      {four}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
        <div className={classes.rights}>
          <p>&copy; {year} GPT-3. All rights reserved</p>
        </div>
      </Footersection>
    </Fragment>
  );
};

export default Footer;
