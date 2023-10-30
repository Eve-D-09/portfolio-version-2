import React from "react";
import { prod } from "../languages/lang.js";

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <>
      <div>
        <p>{prod[props.language].FOOTER_P}</p>
      </div>
      <div className="footerSecondBox">
        <p> Eve, Copyright&copy; {year}</p>
      </div>
    </>
  );
};

export default Footer;
