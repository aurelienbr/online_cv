import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import Header from "./Header";
import ContactMain from "./components/ContactMain";
import FormContact from "./components/FormContact";
import axios from "axios";

class Contact extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  constructor() {
    super();
    this.textAreaMax = 360;
    this.state = {
      name: "",
      email: "",
      textarea: "",
      textAreaMax: 360,
      error: {
        name: "",
        email: "",
        textarea: ""
      }
    };
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value,
      error: {
        ...this.state.error,
        name: ""
      }
    });
  };
  handleEmailChange = e => {
    this.setState({
      email: e.target.value,
      error: {
        ...this.state.error,
        email: ""
      }
    });
  };
  handleTextAreaChange = e => {
    this.setState({
      textarea: e.target.value,
      textAreaMax: this.textAreaMax - e.target.value.length,
      error: {
        ...this.state.textarea,
        textarea: ""
      }
    });
  };

  sendEmail = event => {
    const { name, email, textarea, textAreaMax } = this.state;
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
      this.setState({
        error
      });
      return null;
    }
    axios
      .post("https://apiresume.herokuapp.com/mail", {
        email: this.state.email,
        subject: this.state.name,
        text: this.state.textarea,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    const { location } = this.props;
    const {
      name,
      email,
      textarea,
      isModalOpen,
      error,
      textAreaMax
    } = this.state;
    return (
      <div id="contact">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <ContactMain
              error={error}
              handleNameChange={this.handleNameChange.bind(this)}
              handleEmailChange={this.handleEmailChange.bind(this)}
              handleTextAreaChange={this.handleTextAreaChange.bind(this)}
              sendEmail={this.sendEmail.bind(this)}
              name={name}
              email={email}
              textarea={textarea}
              textAreaMax={textAreaMax}
              isModalOpen={isModalOpen}
              openModal={this.openModal}
              onRequestClose={this.closeModal}
            />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <FormContact
            mobile
            error={error}
            textAreaMax={textAreaMax}
            handleNameChange={this.handleNameChange.bind(this)}
            handleEmailChange={this.handleEmailChange.bind(this)}
            handleTextAreaChange={this.handleTextAreaChange.bind(this)}
            sendEmail={this.sendEmail.bind(this)}
            name={name}
            email={email}
            textarea={textarea}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default Contact;
