// @flow
import React from 'react';
import MediaQuery from 'react-responsive';

import Header from './Header';
import AboutMain from './components/AboutMain';

import { connect } from 'react-redux';

type Props = {
  location: any,
  locale: string
};

class About extends React.Component<Props> {
  downloadCV = () => {
    switch (this.props.locale) {
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

  render() {
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

const mapStateToprops = ({ locale }) => ({
  locale: locale.locale
});

export default connect(mapStateToprops)(About);
