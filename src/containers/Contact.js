import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import Header from "./Header";
import ContactMain from "./components/ContactMain";
import axios from "axios";

class Contact extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      textarea: "",
      isModalOpen: false
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleTextAreaChange = e => {
    this.setState({ textarea: e.target.value });
  };
  sendEmail = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/mail", {
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
  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { location } = this.props;
    const { name, email, textarea, isModalOpen } = this.state;
    return (
      <div id="contact">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <ContactMain
              handleNameChange={this.handleNameChange.bind(this)}
              handleEmailChange={this.handleEmailChange.bind(this)}
              handleTextAreaChange={this.handleTextAreaChange.bind(this)}
              sendEmail={this.sendEmail.bind(this)}
              name={name}
              email={email}
              textarea={textarea}
              isModalOpen={isModalOpen}
              openModal={this.openModal}
              onRequestClose={this.closeModal}
            />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <ContactMain
            mobile
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
