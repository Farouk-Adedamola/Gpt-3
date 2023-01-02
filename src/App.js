import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
