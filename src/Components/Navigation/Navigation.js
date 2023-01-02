import React, { Fragment } from "react";
import { navData, second } from "./NavData";
import logo from "../../Assets/Images/GPT-3.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <section>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <section>
          <div></div>

          <div></div>
        </section>
      </section>
    </Fragment>
  );
};

export default Navigation;
