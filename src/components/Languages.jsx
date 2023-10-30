import React, { useState, useEffect } from "react";
import { prod, supportedLang } from "../languages/lang.js";

const Languages = (props) => {
  console.log(props.language);

  return (
    <div className="selectContainer">
      <select
        onChange={(e) => {
          props.setLanguage(e.target.value);
        }}
      >
        {supportedLang.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Languages;
