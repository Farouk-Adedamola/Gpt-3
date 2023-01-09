import React, { Fragment, useState, useEffect, useRef } from "react";
import { nav, second } from "./NavData";
import logo from "../../Assets/Images/GPT-3.svg";
import menu from "../../Assets/Images/Menu.svg";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import Hero from "../HeroSection/Hero";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {});
    if (toggle) {
      linksContainerRef.current.style.height = `${100}vh`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [toggle]);

  return (
    <Fragment>
      <div className={classes.container}>
        <section className={classes.section}>
          <div className={classes.image}>
            <img src={logo} alt="logo" />
            <button
              id="button"
              type="button"
              style={{ transition: "all .6s" }}
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <img
                  src={menu}
                  alt="menu"
                  style={{
                    width: "55px",
                    transition: "all .5s",
                    color: "#222222",
                    fontSize: "1.7rem",
                  }}
                />
              ) : (
                <img
                  src={menu}
                  alt="menu"
                  style={{ width: "55px", transition: "all .5s" }}
                />
              )}
            </button>
          </div>
          <article className={classes.article} ref={linksContainerRef}>
            <ul id="links" ref={linksRef} className={classes.firstLink}>
              {nav.map((eachLink) => {
                const { id, title, path, CSS } = eachLink;
                return (
                  <li key={id}>
                    <NavLink to={path} style={CSS} className={classes.links}>
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <ul id="secondlinks" className={classes.secondLink} ref={linksRef}>
              {second.map((eachLink) => {
                const { id, title, path, CSS } = eachLink;
                return (
                  <li key={id}>
                    <NavLink to={path} style={CSS} className={classes.links}>
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
        <Hero />
      </div>
    </Fragment>
  );
};

export default Navigation;
