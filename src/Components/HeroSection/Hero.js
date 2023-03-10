import React, { Fragment, useState } from "react";
import classes from "./Hero.module.css";
import { persons } from "./Persondata";
import robot from "../../Assets/Images/HeroImages/robot.svg";

// from "../../Assets/Images/index";
const Hero = () => {
  const [text, setText] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <section className={classes.hero_section}>
        <div className={classes.hero_top}>
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form onClick={submitHandler} className={classes.form}>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              placeholder="Your Email Address"
            />
            <button type="submit">Get Started</button>
          </form>
          <div className={classes.persons__parent}>
            <div className={classes.persons}>
              {persons.map((person) => {
                const { id, img, CSS } = person;
                return (
                  <div key={id} className={classes.persons__img_container}>
                    <img src={img} style={CSS} alt="img" />
                  </div>
                );
              })}
            </div>
            <p className={classes.persons_text}>
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className={classes.hero_bottom}>
          <img src={robot} alt="img" />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
