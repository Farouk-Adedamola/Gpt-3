import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./Components/Navigation/Navigation";

import {
  Home,
  CaseStudies,
  SharedLayout,
  OpenAI,
  Signin,
  Signup,
  WhatisGPT,
} from "./Components/index";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="casestudies" element={<CaseStudies />} />
            <Route path="openai" element={<OpenAI />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="whatisGPT" element={<WhatisGPT />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
