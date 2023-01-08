import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/GPT-3.svg";
import { footerLinks } from "./Footerdata";

const Footer = () => {
  const time = new Date();
  let year = time.getFullYear();
  return (
    <Fragment>
      <section className={classes.footer__section}>
        <h1>Do you want to step in to the future before others</h1>
        <button>
          <Link to="/" className={classes.first__link}>
            Request Early Access
          </Link>
        </button>

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
              );
            })}
          </div>
        </main>
        <div className={classes.rights}>
          <p>&copy; {year} GPT-3. All rights reserved</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
