import React from "react";
import { Route, Routes } from "react-router-dom";
import Makecv from "../pages/makecv";
import Viewcv from "../pages/viewcv";
import PersonalInfo from "../components/personalInfo";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Makecv />} />
        <Route path="/view" element={<Viewcv />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
      </Routes>
    </>
  );
}

export default Index;
