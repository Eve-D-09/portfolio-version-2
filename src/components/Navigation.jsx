import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { prod } from "../languages/lang.js";
import MenuIcon from "../img/svg/menu-dots-circle-svgrepo-com.svg";
// import { ReactComponent as MenuIcon } from "../img/svg/menu-dots-circle-svgrepo-com.svg";

const Navigation = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const [ width, setWidth ] = useState(window.innerWidth);
  const breakpoint = 900;
  const ref = useRef();

  const { language } = props;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const outsideClick = useCallback((e) => {
    if ( ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", outsideClick);
    return () => {
        document.addEventListener("mousedown", outsideClick);
    };
  });
  
  return (
    <div ref={ref} className="navigation">
      <div >
        <button onClick={() => setIsOpen(!isOpen)}><img src={MenuIcon} alt="menu-icon" /></button>
      </div>
      { (isOpen || width > breakpoint) && (
        <nav className={`${ isOpen ? '.closeNavigation' : 'nav'}`}>
          {/* <div className="closeNav">
             <button onClick={() => setIsOpen(!isOpen)}><img src={MenuIcon} alt="menu-icon" /></button>
          </div> */}
        <ul >
          <Link to={"/"} className="navLinks" onClick={closeMenu}><li className="homeLink">{prod[language].HOME}</li></Link>
          <Link to={"/about"} className="navLinks" onClick={closeMenu}><li>{prod[language].ABOUT} </li>  </Link>
          <Link to={"/projects"} className="navLinks" onClick={closeMenu}><li>{prod[language].PROJECTS} </li> </Link>
          <Link to={"/contact"} className="navLinks" onClick={closeMenu}><li>{prod[language].CONTACT} </li></Link>
        </ul>
      </nav>
      )}
      
    </div>
  );
};

export default Navigation;


// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
//  react page transitions: https://www.youtube.com/watch?v=8voRA_DMuFM
// React Page Transitions With Framer Motion + React Router v6 (2023)