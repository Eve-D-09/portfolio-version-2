import React from "react";
import EmailIcon from "../img/svg/email-svgrepo-com.svg";
import LinkedinIcon from "../img/svg/linkedin-circle-svgrepo-com.svg";
import GithubIcon from "../img/svg/github-142-svgrepo-com.svg";
import LocationIcon from "../img/svg/location-svgrepo-com.svg";

const SocialMedia = () => {
  return (
     <>
      <div className="emailBox">
        <img src={EmailIcon} alt="email-icon" />
        <p>ieva.dirmiene@gmail.com</p>
      </div>
      <div className="locationBox">
        <img src={LocationIcon} alt="location-icon" />
        <p>Belgium, Brussels</p>
      </div>
      <div className="mediaBox">
        <a href=""><img src={GithubIcon} alt="github-icon" /></a>
        <a href="https://www.linkedin.com/in/ieva-dirmiene-643b38269/"><img src={LinkedinIcon} alt="github-icon" /></a>
      </div>
    </>
  );
};

export default SocialMedia;

