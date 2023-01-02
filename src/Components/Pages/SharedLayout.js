import React, { Fragment } from "react";
// import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <Fragment>
      {/* <Navigation /> */}
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
