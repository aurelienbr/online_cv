// @flow
import React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';

import Header from '../headers/Header';
import ContactMain from './containers/ContactMain';
import FormContact from './containers/FormContact';
import { sendEmail, getCoords } from '../actions';

import type { Connector, MapDispatchToProps, MapStateToProps } from 'react-redux';
import type { Action, Dispatch, State } from '../reducers/reducersType';

type OwnProps = { location?: any };

type StateProps = {
  name: string,
  email: string,
  textArea: string,
  textAreaMax: number
} & OwnProps;

type DispatchProps = {
  getCoords(): void,
  sendEmail(name: string, email: string, textArea: string, textAreaMax: number): void
};

type Props = StateProps & DispatchProps;

class Contact extends React.Component<Props> {
  componentDidMount() {
    this.props.getCoords();
  }
  sendEmail = event => {
    const { name, email, textArea, textAreaMax, sendEmail } = this.props;
    event.preventDefault();
    sendEmail(name, email, textArea, textAreaMax);
  };

  render(): React$Element<*> {
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

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = (
  state: State,
  ownProps: OwnProps
): StateProps => ({
  name: state.formContact.name,
  email: state.formContact.email,
  textArea: state.formContact.textArea,
  textAreaMax: state.formContact.textAreaMax,
  error: state.formContact.error,
  ...ownProps
});

const mapDispatchToProps: MapDispatchToProps<Action, OwnProps, DispatchProps> = (
  dispatch: Dispatch,
  ownProps: OwnProps
): DispatchProps => ({
  sendEmail: (name: string, email: string, textArea: string, textAreaMax: number) => {
    dispatch(sendEmail(name, email, textArea, textAreaMax));
  },
  getCoords: () => {
    dispatch(getCoords());
  }
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default connector(Contact);
