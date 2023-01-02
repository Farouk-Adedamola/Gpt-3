import React, { Fragment, useState, useEffect, useRef } from "react";
import { nav, second } from "./NavData";
import logo from "../../Assets/Images/GPT-3.svg";
import menu from "../../Assets/Images/Menu.svg";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

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
      <section className={classes.section}>
        <div className={classes.image}>
          <img src={logo} alt="logo" />
          <button
            id="button"
            type="button"
            style={{ transition: "all .6s" }}
            onClick={() => setToggle(!toggle)}
          >
            {/* {toggle ? (
            <GiCrossMark
              style={{
                rotate: "45deg",
                transition: "all .5s",
                color: "#222222",
                fontSize: "1.7rem",
                color: "#ffae1b",
              }}
            />
          ) : (
            <BiMenuAltRight style={{ transition: "all .5s" }} />
          )} */}
          </button>
        </div>
        <article className={classes.article} ref={linksContainerRef}>
          <ul id="links" ref={linksRef} className={classes.firstLink}>
            {nav.map((eachLink) => {
              const { id, link, path } = eachLink;
              return (
                <li key={id}>
                  <a href="/">{link}</a>
                </li>
              );
            })}
          </ul>
          <ul id="secondlinks" className={classes.secondLink} ref={linksRef}>
            {second.map((eachLink) => {
              const { id, link, path } = eachLink;
              return (
                <li key={id}>
                  <a href="/">{link}</a>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </Fragment>
  );
};

export default Navigation;
