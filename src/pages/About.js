// @flow
import React from 'react';
import MediaQuery from 'react-responsive';

import Header from '../headers/Header';
import AboutMain from './containers/AboutMain';

import { connect } from 'react-redux';

import type { Connector, MapStateToProps } from 'react-redux';
import type { State } from '../reducers/reducersType';

type OwnProps = {
  location?: any
};

type StateProps = {
  locale: string
} & OwnProps;

type Props = StateProps;

class About extends React.Component<Props> {
  downloadCV = () => {
    const { locale } = this.props;
    switch (locale) {
      case 'fr':
        window.open('https://my-resume-aurelien.herokuapp.com/files/CVFR.pdf');
        break;
      case 'en':
        window.open('https://my-resume-aurelien.herokuapp.com/files/CVEN.pdf');
        break;
      case 'ru':
        window.open('https://my-resume-aurelien.herokuapp.com/files/CVRU.pdf');
        break;
      default:
        window.open('https://my-resume-aurelien.herokuapp.com/files/CVEN.pdf');
    }
  };

  render(): React$Element<*> {
    const { location } = this.props;
    return (
      <div id="About">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} downloadCV={this.downloadCV} />
            <AboutMain downloadCV={this.downloadCV} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <AboutMain mobile downloadCV={this.downloadCV} />
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = (
  state: State,
  ownProps: OwnProps
): StateProps => ({
  locale: state.locale.locale,
  ...ownProps
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps);

export default connector(About);
