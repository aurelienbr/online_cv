import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import axios from "axios";
import { connect } from "react-redux";

import Header from "./Header";
import ContactMain from "./components/ContactMain";
import FormContact from "./components/FormContact";
import { setFormErrors } from "../actions";

class Contact extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  state = {
    loadingMail: false,
    errorMail: false
  };

  sendEmail = event => {
    const { name, email, textarea, textAreaMax, setFormErrors } = this.props;
    let error = {};
    event.preventDefault();
    if (name.length === 0) {
      error.name = "error.nameNotProvided";
    }
    if (name.length > 16) {
      error.name = "error.nameTooLong";
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      error.email = "error.emailNotMatch";
    }
    if (email.length === 0) {
      error.email = "error.emailNotProvided";
    }
    if (textAreaMax < 0) {
      error.textarea = "error.textareaMax";
    }
    if (!textarea) {
      error.textarea = "error.textareaNotProvided";
    }
    if (Object.keys(error).length > 0) {
      setFormErrors(error);
      return null;
    }
    this.setState({ loadingMail: true });
    axios
      .post("https://apiresume.herokuapp.com/mail", {
        email: email,
        subject: name,
        text: textarea,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        this.setState({ loadingMail: false });
      })
      .catch(error => {
        this.setState({ loadingMail: false, errorMail: true });
      });
  };

  render() {
    const { location } = this.props;
    const { loadingMail } = this.state;

    return (
      <div id="contact">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <ContactMain
              sendEmail={this.sendEmail.bind(this)}
              loadingMail={loadingMail}
              onRequestClose={this.closeModal}
            />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <FormContact
            mobile
            sendEmail={this.sendEmail.bind(this)}
            loadingMail={loadingMail}
          />
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = ({ formContact }) => ({
  name: formContact.name,
  email: formContact.email,
  textarea: formContact.textArea,
  textAreaMax: formContact.textArea,
  error: formContact.error
});

export default connect(mapStateToProps, { setFormErrors })(Contact);
