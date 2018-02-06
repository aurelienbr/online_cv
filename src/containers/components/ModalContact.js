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
      isOpen,
      onAfterOpen,
      onRequestClose,
      closeTimeoutMS,
      style,
      sendEmail
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        closeTimeoutMS={closeTimeoutMS}
        style={style}
        contentLabel="Modal"
      >
        <form style={styles.formContainer}>
          <div style={styles.inputMain}>
            <div className="wrap-input-contact" style={styles.containerInput}>
              <span style={styles.span}>Your Name</span>
              <input
                className="input"
                style={{ ...styles.input, ...styles.dimInput }}
                type="text"
                name="name"
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
      </Modal>
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
  isOpen: PropTypes.bool.isRequired,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  style: PropTypes.array,
  sendEmail: PropTypes.func.isRequired
};

export default MyModal;
