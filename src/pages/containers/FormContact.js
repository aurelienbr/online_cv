// @flow
import React from 'react';
import Modal from 'react-modal';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import Text from '../common/Text';
import errorMail from '../../assets/icons/errorMail.png';
import checkedImg from '../../assets/icons/checked.png';
import errorImg from '../../assets/icons/error.png';
import githubImg from '../../assets/icons/github-logo.png';
import linkedinImg from '../../assets/icons/linkedin-logo.png';

import { handleNameChange, handleEmailChange, handleTextAreaChange } from '../../actions';

import type { Connector, MapDispatchToProps, MapStateToProps } from 'react-redux';
import type { Action, Dispatch, State } from '../../reducers/reducersType';

type OwnProps = {
  intl: any,
  sendEmail(name: string, email: string, textArea: string, textAreaMax: number): void
};

type StateProps = {
  loadingMail: boolean,
  name: string,
  email: string,
  emailSuccess: boolean,
  errorSendEmail: boolean,
  errorForm: boolean,
  textArea: string,
  mobile?: boolean,
  error: Object,
  textAreaMax: number
} & OwnProps;

type DispatchProps = {
  handleNameChange(value: string): void,
  handleEmailChange(value: string): void,
  handleTextAreaChange(value: string): void
};

type Props = StateProps & DispatchProps;

type StateComponent = {
  iconChecked: boolean,
  visible: boolean
};

class FormContact extends React.Component<Props, StateComponent> {
  state = {
    iconChecked: false,
    visible: false
  };
  componentWillMount() {
    Modal.setAppElement('body');
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.errorForm === true &&
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

  setTimeoutForState = (newState, duration) => setTimeout(() => this.setState(newState), duration);

  handleEmailChange = e => this.props.handleEmailChange(e.target.value);
  handleNameChange = e => this.props.handleNameChange(e.target.value);
  handleTextAreaChange = e => {
    if (this.props.textAreaMax > 0) {
      this.props.handleTextAreaChange(e.target.value);
    }
  };

  renderButton = () => {
    const { loadingMail, errorSendEmail, emailSuccess } = this.props;
    const { visible } = this.state;

    if (emailSuccess) {
      return <img className={visible === true ? 'fadeIn' : 'fadeOut'} src={checkedImg} alt="ok" />;
    }

    if (errorSendEmail) {
      return (
        <img className={visible === true ? 'fadeIn' : 'fadeOut'} src={errorMail} alt="error" />
      );
    }

    const render = loadingMail ? (
      <Loader type="Rings" color="#fff" height="45" width="45" />
    ) : (
      <Text style={styles.textBtn} size="p" id="buttonContact.submit" />
    );
    return render;
  };

  render(): React$Element<*> {
    const { sendEmail, name, email, textArea, mobile, error, textAreaMax } = this.props;

    const { formatMessage } = this.props.intl;

    return (
      <form id="Contact" style={styles.formContainer}>
        <div style={mobile && styles.containerCenter}>
          <Text style={styles.titleContact} size="h3" id="formContact.contactMe" />
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
              placeholder={formatMessage({ id: 'formContact.placeholderName' })}
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
                id: 'formContact.placeholderEmail'
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
            value={textArea}
            onChange={this.handleTextAreaChange}
            className="input"
            style={{ ...styles.input, ...styles.textArea }}
            name="message"
            placeholder={formatMessage({
              id: 'formContact.placeholderTextarea'
            })}
          />
          <span className="focus-input" style={styles.focusInput} />
          <p style={styles.textareaMax}>{textAreaMax}</p>
          {error.textArea && (
            <div style={styles.errorContainer}>
              <Text style={styles.error} id={error.textArea} size="error" />
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
        <div>
          <a
            style={styles.iconGithub}
            href="https://github.com/aurelienbr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImg} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-brachet-146556141/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinImg} alt="linkedin" />
          </a>
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
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  iconGithub: {
    marginRight: 15
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 30
  },
  errorContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: -70,
    left: 0,
    marginBottom: 5
  },
  inputMain: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  inputMainMobile: {
    display: 'flex',
    flexDirection: 'column'
  },
  textareaMax: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  containerInput: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '2px solid #d9d9d9',
    paddingBottom: 13,
    marginBottom: 65,
    marginLeft: 30,
    marginRight: 30
  },
  span: {
    color: '#999999',
    lineHeight: 1.5,
    paddingLeft: 5
  },
  titleContact: {
    display: 'block',
    width: '100%',
    color: '#333333',
    lineHeight: 1.2,
    textAlign: 'left',
    paddingBottom: 44
  },
  dimInput: {
    height: 40,
    position: 'relative'
  },
  input: {
    display: 'block',
    width: '100%',
    background: 'transparent',
    color: '#555555',
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
    color: '#fff'
  },
  focusInput: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none'
  }
};

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = (
  state: State,
  ownProps: OwnProps
): StateProps => ({
  name: state.formContact.name,
  email: state.formContact.email,
  textArea: state.formContact.textArea,
  textAreaMax: state.formContact.textAreaMax,
  error: state.formContact.error,
  errorForm: state.formContact.errorForm,
  loadingMail: state.formContact.loadingMail,
  emailSuccess: state.formContact.emailSuccess,
  errorSendEmail: state.formContact.errorSendEmail,
  ...ownProps
});

const mapDispatchToProps: MapDispatchToProps<Action, OwnProps, DispatchProps> = (
  dispatch: Dispatch,
  ownProps: OwnProps
): DispatchProps => ({
  handleEmailChange: () => {
    dispatch(handleEmailChange());
  },
  handleNameChange: () => {
    dispatch(handleNameChange());
  },
  handleTextAreaChange: () => {
    dispatch(handleTextAreaChange());
  }
});

const FormContactConnected: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContact);

export default injectIntl(FormContactConnected);
