import React from "react";
import { prod } from "../languages/lang.js";

const Form = (props) => {
  const { onSubmit } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>{prod[props.language].FORM_LABEL_NAME}</label>
          <input type="text" name="firstName" placeholder="" required />
        </div>
        <div>
          <label>{prod[props.language].FORM_LABEL_SURNAME}</label>
          <input type="text" name="lastName" placeholder="" required />
        </div>
        <div>
          <label>{prod[props.language].FORM_LABEL_EMAIL}</label>
          <input type="text" name="email" placeholder="" required />
        </div>
        <div>
          <label>{prod[props.language].FORM_LABEL_MESSAGE}</label>
          <textarea name="message" placeholder="" required></textarea>
        </div>
        <div className="submitButton">
          <button type="submit">{prod[props.language].FORM_BUTTON_SEND}</button>
        </div>
      </form>
    </>
  );
};

export default Form;

//  form from web3forms: https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
