// @flow
import React from "react";
import Modal from "react-modal";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import Text from "../../common/Text";
import errorMail from "../../assets/icons/errorMail.png";
import checkedImg from "../../assets/icons/checked.png";
import errorImg from "../../assets/icons/error.png";

import {
  handleNameChange,
  handleEmailChange,
  handleTextAreaChange
} from "../../actions";

type Props = {
  loadingMail: boolean,
  intl: any,
  sendEmail: Function,
  handleNameChange: Function,
  handleEmailChange: Function,
  handleTextAreaChange: Function,
  name: string,
  email: string,
  textarea: string,
  mobile?: boolean,
  error: Object,
  textAreaMax: number
};

type State = {
  iconChecked: boolean,
  visible: boolean
};

class FormContact extends React.Component<Props, State> {
  state = {
    iconChecked: false,
    visible: false,
    emailFailure: false
  };
  componentWillMount() {
    Modal.setAppElement("body");
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.errorSendEmail === true &&
      nextProps.loadingMail === false &&
      this.props.loadingMail === true
    ) {
      this.setState({ visible: true });
      this.setTimeoutForState({ visible: false }, 1500);
    }
    if (nextProps.loadingMail === false && this.props.loadingMail === true) {
      this.setState({ visible: true });
      this.setTimeoutForState({ visible: false }, 1500);
    }
  }

  setTimeoutForState = (newState, duration) =>
    setTimeout(() => this.setState(newState), duration);

  handleEmailChange = e => this.props.handleEmailChange(e.target.value);
  handleNameChange = e => this.props.handleNameChange(e.target.value);
  handleTextAreaChange = e => this.props.handleTextAreaChange(e.target.value);

  renderButton = () => {
    const { loadingMail, emailFailure, emailSuccess } = this.props;
    const { visible } = this.state;

    if (emailSuccess) {
      return (
        <img
          className={visible === true ? "fadeIn" : "fadeOut"}
          src={checkedImg}
          alt="ok"
        />
      );
    }

    if (emailFailure) {
      return (
        <img
          className={visible === true ? "fadeIn" : "fadeOut"}
          src={errorMail}
          alt="error"
        />
      );
    }

    const render = loadingMail ? (
      <Loader type="Rings" color="#fff" height="45" width="45" />
    ) : (
      <Text style={styles.textBtn} size="p" id="buttonContact.submit" />
    );
    return render;
  };

  render() {
    const {
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
              onChange={this.handleNameChange}
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
          <div style={styles.containerInput} className="wrap-input-contact">
            <Text style={styles.span} size="p" id="formContact.spanEmail" />
            <input
              className="input"
              style={{ ...styles.input, ...styles.dimInput }}
              type="text"
              value={email}
              onChange={this.handleEmailChange}
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
            onChange={this.handleTextAreaChange}
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
            {this.renderButton()}
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
    display: "flex",
    position: "absolute",
    bottom: -70,
    left: 0,
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
    position: "absolute",
    top: 0,
    left: 0,
    pointerEvents: "none"
  }
};

const mapStateToprops = ({ formContact }) => ({
  name: formContact.name,
  email: formContact.email,
  textarea: formContact.textArea,
  error: formContact.error,
  textAreaMax: formContact.textAreaMax,
  loadingMail: formContact.loadingMail,
  emailSuccess: formContact.emailSuccess,
  emailFailure: formContact.emailFailure
});

const FormContactConnected = connect(mapStateToprops, {
  handleNameChange,
  handleEmailChange,
  handleTextAreaChange
})(FormContact);

export default injectIntl(FormContactConnected);
