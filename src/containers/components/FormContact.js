import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import Text from "../../common/Text";
import errorImg from "../../images/error.png";

class FormContact extends React.Component {
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
      textarea,
      mobile,
      error,
      textAreaMax
    } = this.props;

    const { formatMessage } = this.props.intl;

    return (
      <form id="Contact" style={styles.formContainer}>
        <div style={mobile && styles.containerCenter}>
          <Text
            style={styles.titleContact}
            size="h3"
            id="formContact.contactMe"
          />
        </div>
        <div style={mobile ? styles.inputMainMobile : styles.inputMain}>
          <div className="wrap-input-contact" style={styles.containerInput}>
            <Text style={styles.span} size="p" id="formContact.spanName" />
            <input
              className="input"
              style={{ ...styles.input, ...styles.dimInput }}
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder={formatMessage({ id: "formContact.placeholderName" })}
            />
            <span className="focus-input" style={styles.focusInput} />
            {error.name && (
              <div style={styles.errorContainer}>
                <Text style={styles.error} id={error.name} size="error" />
                <div>
                  <img src={errorImg} alt="error" style={styles.imgError} />
                </div>
              </div>
            )}
          </div>
          <div
            style={styles.containerInput}
            className="wrap-input-contact"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <Text style={styles.span} size="p" id="formContact.spanEmail" />
            <input
              className="input"
              style={{ ...styles.input, ...styles.dimInput }}
              type="text"
              value={email}
              onChange={handleEmailChange}
              name="email"
              placeholder={formatMessage({
                id: "formContact.placeholderEmail"
              })}
            />
            <span className="focus-input" style={styles.focusInput} />
            {error.email && (
              <div style={styles.errorContainer}>
                <Text style={styles.error} id={error.email} size="error" />
                <div>
                  <img src={errorImg} alt="error" style={styles.imgError} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="wrap-input-contact"
          style={styles.containerInput}
          data-validate="Message is required"
        >
          <Text style={styles.span} size="p" id="formContact.spanTextarea" />
          <textarea
            value={textarea}
            onChange={handleTextAreaChange}
            className="input"
            style={{ ...styles.input, ...styles.textArea }}
            name="message"
            placeholder={formatMessage({
              id: "formContact.placeholderTextarea"
            })}
          />
          <span className="focus-input" style={styles.focusInput} />
          <p style={styles.textareaMax}>{textAreaMax}</p>
          {error.textarea && (
            <div style={styles.errorContainer}>
              <Text style={styles.error} id={error.textarea} size="error" />
              <div>
                <img src={errorImg} alt="error" style={styles.imgError} />
              </div>
            </div>
          )}
        </div>
        <div style={mobile && styles.containerCenter}>
          <button onClick={sendEmail} className="contactBtn">
            <Text style={styles.textBtn} size="p" id="buttonContact.submit" />
          </button>
        </div>
      </form>
    );
  }
}

const styles = {
  error: {
    marginLeft: 5
  },
  imgError: {
    marginLeft: 5
  },
  containerCenter: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 30
  },
  errorContainer: {
    marginLeft: 5,
    display: "flex",
    marginBottom: 5
  },
  inputMain: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  inputMainMobile: {
    display: "flex",
    flexDirection: "column"
  },
  textareaMax: {
    position: "absolute",
    right: 0,
    bottom: 0
  },
  containerInput: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
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
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none"
  }
};

FormContact.propTypes = {
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

export default injectIntl(FormContact);
