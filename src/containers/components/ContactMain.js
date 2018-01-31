import React from "react";
import PropTypes from "prop-types";

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
    <form>
      <label>Name :</label>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={handleNameChange}
      />
      <label>E-mail :</label>
      <input
        type="text"
        value={email}
        placeholder="Enter your email adress"
        onChange={handleEmailChange}
      />
      <label>Content :</label>
      <input
        style={{ width: "90%" }}
        componentClass="textarea"
        value={textarea}
        placeholder="Enter text"
        onChange={handleTextAreaChange}
      />
      <button onClick={sendEmail}>send</button>
    </form>
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
