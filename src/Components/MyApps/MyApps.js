import React, { Fragment } from "react";
import classes from "./MyApps.module.css";
import vr from "../../Assets/Images/VirtualRel.svg";
import { Link } from "react-router-dom";

const MyApps = () => {
  return (
    <Fragment>
      <section>
        <div>
          <img src={vr} alt="virtual reality" />
        </div>
        <div>
          <Link to="/">Request Early Access to Get Started</Link>
          <h1>The possibilities are beyond your imagination</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <Link to="/" className={classes.links}>
            Request Early Access to Get Started
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default MyApps;
