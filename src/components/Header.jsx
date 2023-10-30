import React from "react";
import Navigation from "./Navigation";
import Languages from "./Languages";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="firstBox">
          <h1>
            Ieva <span style={{ color: "#1F45FC" }}>Dirmiene</span>
          </h1>
        </div>
        <div className="secondBox">
          <Languages
            setLanguage={props.setLanguage}
            language={props.language}
          />
          <Navigation language={props.language} />
        </div>
      </div>
    </div>
  );
};

export default Header;

// lime green #32CD32
