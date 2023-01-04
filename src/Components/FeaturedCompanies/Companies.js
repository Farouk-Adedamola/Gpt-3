import React, { Fragment } from "react";
import { companies } from "./Comapnydata";
import classes from "./Companies.module.css";

const Companies = () => {
  return (
    <Fragment>
      <div className={classes.companies__container}>
        <section className={classes.companies}>
          {companies.map((company) => {
            const { id, img } = company;
            return (
              <div key={id} className={classes.companies__company}>
                <img src={img} alt="company" />
              </div>
            );
          })}
        </section>
      </div>
    </Fragment>
  );
};

export default Companies;
