import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
// import { AnimatePresence } from "framer-motion";

const Screens = (props) => {
  const location = useLocation();

 
  return (
    <>
      {/* <AnimatePresence> */}
        <Routes key={location.pathname} location={location}>
          <Route index element={<HomePage language={props.language} />} />
          <Route path="/home"  element={<HomePage language={props.language} />} />
          <Route path="/about" element={<About language={props.language} />} />
          <Route path="/projects"  element={<Projects language={props.language} />}/>
          <Route path="/contact" element={<Contact language={props.language} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      {/* </AnimatePresence> */}
    </>
  );
};

export default Screens;
