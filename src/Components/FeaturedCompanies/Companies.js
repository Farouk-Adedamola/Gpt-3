import React, { Fragment } from "react";
import { companies } from "./Comapnydata";
import classes from "./Companies.module.css";
import styled from "styled-components";

const CompaniesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 50vw;
`;

const Companies = () => {
  return (
    <Fragment>
      <CompaniesContainer className={classes.companies__container}>
        <StyledSection className={classes.companies}>
          {companies.map((company) => {
            const { id, img } = company;
            return (
              <div key={id} className={classes.companies__company}>
                <img src={img} alt="company" />
              </div>
            );
          })}
        </StyledSection>
      </CompaniesContainer>
    </Fragment>
  );
};

export default Companies;
