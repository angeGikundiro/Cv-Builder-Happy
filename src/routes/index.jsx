import React from "react";
import { Route, Routes } from "react-router-dom";
import Makecv from "../pages/makecv";
import Viewcv from "../pages/viewcv";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Makecv />} />
        <Route path="/view" element={<Viewcv />} />
      </Routes>
    </>
  );
}

export default Index;
