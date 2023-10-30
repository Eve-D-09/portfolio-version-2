import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDown from "../img/svg/chevron-down-svgrepo-com.svg";
import { prod } from "../languages/lang.js";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import MarsProject from "../img/images/mars-project-black-white1.jpg";
import MusicProject from "../img/images/headphones.jpg";
import ReplicaProject from "../img/images/partytrick-black-white.png";
// import MinionProject from "../img/images/minion-black-white.png";
import Minion from "../img/images/minion-small.jpg";

const Projects = (props) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="projectsContainer">
      <div ref={ref} className="projectsWrapper">
        <div className="projectsHeading">
          <h2>{prod[props.language].PROJECTS_H2}</h2>
        </div>
        <div style={{ transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s", }}
             className="projectItem">
          <div className="projectIntro">
            <h3>Mars Messengers</h3>
            <p>
              First React, Redux-toolkit project made with NASA API. Search for
              rover's photos from Mars.
            </p>
          </div>
          <div className="projectImage">
            <img src={MarsProject} alt="project-screenshot" />
          </div>
          <div className="projectLinks">
            <a href="http://www.marsmessengers.co.uk">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
        <div  style={{ transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s", }} className="projectItem">
          <div className="projectIntro">
            <h3>Music Preview API</h3>
            <p>
              First JS project - made with Deezer API. Search for any artist or
              band and get song preview.
            </p>
          </div>
          <div className="projectImage">
            <img src={MusicProject} alt="project-screenshot" />
          </div>
          <div className="projectLinks">
            <a href="https://music-preview-api-with-deezer.netlify.app/">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>

        <div className="projectItem" style={{ transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s", }}>
          <div className="projectIntro">
            <h3>Replica Project</h3>
            <p>
              Landing copy-page of real website - Partytrick. Made purely with
              HTML and CSS.
            </p>
          </div>
          <div className="projectImage">
            <img src={ReplicaProject} alt="project-screenshot" />
          </div>
          <div className="projectLinks">
            <a href="https://aquamarine-kelpie-f1ee1f.netlify.app">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
        <div className="projectItem" style={{ transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s", }}>
          <div className="projectIntro">
            <h3>Minion small SVG project</h3>
            <p>
              This  task was to design image by playing with SVG
              forms. Mobile only.
            </p>
          </div>
          <div className="projectImage">
            <img src={Minion} alt="project-screenshot" />
          </div>
          <div className="projectLinks">
            <a href="https://eve-svg-hw-365e3a.netlify.app">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
        <div className="furtherLink">
          <button onClick={() => navigate("/contact")}>
            <img src={ArrowDown} alt="arrow-down" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
