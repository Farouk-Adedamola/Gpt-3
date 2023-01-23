import React, { Fragment, useState, useEffect, useRef } from "react";
import { nav, second } from "./NavData";
import logo from "../../Assets/Images/GPT-3.svg";
import menu from "../../Assets/Images/Menu.svg";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import Hero from "../HeroSection/Hero";
import styled from "styled-components";

const Container = styled.div``;

const Section = styled.div`
  @media screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    height: 7vw;
    padding-right: 10px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  padding: 10px 0;
  background: transparent;
  @media screen and (min-width: 760px) {
    width: 200px;
    padding: 0;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 52.56px;
  height: 13.02px;
  object-fit: cover;
`;

const NavbarImage = styled.img`
  @media screen and (min-width: 1200px) {
    width: 62.56px;
    height: 16.02px;
    object-fit: cover;
  }
`;

const ImageButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  font-size: 2.5rem;
  background: transparent;
  cursor: pointer;
  transition: all 1s;
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

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
      <div>
        <Section>
          <ImageWrapper>
            <Image src={logo} alt="logo" />
            <ImageButton
              id="button"
              type="button"
              style={{ transition: "all .6s" }}
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <NavbarImage
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
                <NavbarImage
                  src={menu}
                  alt="menu"
                  style={{ width: "55px", transition: "all .5s" }}
                />
              )}
            </ImageButton>
          </ImageWrapper>
          <article className={classes.article} ref={linksContainerRef}>
            <ul id="links" ref={linksRef} className={classes.firstLink}>
              {nav.map((eachLink) => {
                const { id, title, path, CSS } = eachLink;
                return (
                  <li key={id}>
                    <NavLink
                      to={path}
                      style={({ isActive }) => {
                        return {
                          border: isActive ? "3px solid #FF4820" : "none",
                          background: isActive ? "#FFF" : "transparent",
                          color: isActive ? "#FF4820" : "#FFF",
                          padding: "5px 10px",
                          textDecoration: "none",
                          textTransform: "Capitalize",
                          transition: "all .4s",
                          borderRadius: "5px",
                        };
                      }}
                    >
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
        </Section>
        <Hero />
      </div>
    </Fragment>
  );
};

export default Navigation;
// style = { CSS }
// className={classes.links}
