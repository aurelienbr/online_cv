import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import Text from "../../common/Text";

class MyModal extends React.Component {
  componentWillMount() {
    Modal.setAppElement("body");
  }
  render() {
    const {
      handleNameChange,
      handleEmailChange,
      handleTextAreaChange,
      sendEmail,
      name,
      email,
      textarea
    } = this.props;
    return (
      <form style={styles.formContainer}>
        <Text style={styles.titleContact} size="h3" id="Contact me" />
        <div style={styles.inputMain}>
          <div className="wrap-input-contact" style={styles.containerInput}>
            <span style={styles.span}>Your Name</span>
            <input
              className="input"
              style={{ ...styles.input, ...styles.dimInput }}
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
            <span className="focus-input" style={styles.focusInput} />
          </div>
          <div
            style={styles.containerInput}
            className="wrap-input-contact"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <span style={styles.span}>Email</span>
            <input
              className="input"
              style={{ ...styles.input, ...styles.dimInput }}
              type="text"
              value={email}
              onChange={handleEmailChange}
              name="email"
              placeholder="Enter your email addess"
            />
            <span className="focus-input" style={styles.focusInput} />
          </div>
        </div>
        <div
          className="wrap-input-contact"
          style={styles.containerInput}
          data-validate="Message is required"
        >
          <span style={styles.span}>Message</span>
          <textarea
            value={textarea}
            onChange={handleTextAreaChange}
            className="input"
            style={{ ...styles.input, ...styles.textArea }}
            name="message"
            placeholder="Your message here..."
          />
          <span className="focus-input" style={styles.focusInput} />
        </div>
        <button onClick={sendEmail} className="contactBtn">
          <Text style={styles.textBtn} size="p" id="submit" />
        </button>
      </form>
    );
  }
}

const styles = {
  formContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 60
  },
  inputMain: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  containerInput: {
    width: "100%",
    position: "relative",
    borderBottom: "2px solid #d9d9d9",
    paddingBottom: 13,
    marginBottom: 65,
    marginLeft: 30,
    marginRight: 30
  },
  span: {
    color: "#999999",
    lineHeight: 1.5,
    paddingLeft: 5
  },
  titleContact: {
    display: "block",
    width: "100%",
    color: "#333333",
    lineHeight: 1.2,
    textAlign: "left",
    paddingBottom: 44
  },
  dimInput: {
    height: 40,
    position: "relative"
  },
  input: {
    display: "block",
    width: "100%",
    background: "transparent",
    color: "#555555",
    lineHeight: 1.2,
    marginLeft: 5
  },
  textArea: {
    minHeight: 110,
    paddingTop: 9,
    paddingBottom: 13
  },
  textBtn: {
    marginTop: 8,
    color: "#fff"
  },
  focusInput: {
    position: "absolute",
    display: "block",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none"
  }
};

MyModal.propTypes = {
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  style: PropTypes.array,
  handleNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired
};

export default MyModal;
