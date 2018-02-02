import React from "react";
import PropTypes from "prop-types";

import ButtonContact from "./ButtonContact";

const ContactMain = ({
  mobile,
  handleNameChange,
  handleEmailChange,
  handleTextAreaChange,
  sendEmail,
  name,
  email,
  textarea
}) => (
  <div className="main">
    <ButtonContact>Contact me</ButtonContact>
  </div>
);

ContactMain.propTypes = {
  mobile: PropTypes.bool,
  handleNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired
};

export default ContactMain;
