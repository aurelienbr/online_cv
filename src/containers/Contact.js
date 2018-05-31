// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";

import Header from "./Header";
import ContactMain from "./components/ContactMain";
import FormContact from "./components/FormContact";
import { sendEmail, getCoords } from "../actions";

type StateProps = {
  name: string,
  email: string,
  loadingMail: boolean,
  textarea: string,
  textAreaMax: number,
  sendEmail: Function,
  location: any
};

type DispatchProps = {
  getCoords(): void
};

type Props = StateProps & DispatchProps;

class Contact extends React.Component<Props> {
  componentDidMount() {
    this.props.getCoords();
  }
  sendEmail = event => {
    const { name, email, textarea, textAreaMax, sendEmail } = this.props;
    event.preventDefault();
    sendEmail(name, email, textarea, textAreaMax);
  };

  render() {
    const { location } = this.props;

    return (
      <div id="contact">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <ContactMain sendEmail={this.sendEmail.bind(this)} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <FormContact mobile sendEmail={this.sendEmail.bind(this)} />
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

export default connect(mapStateToProps, { sendEmail, getCoords })(Contact);
