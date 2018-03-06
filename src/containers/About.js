// @flow
import React from "react";
import MediaQuery from "react-responsive";

import Header from "./Header";
import AboutMain from "./components/AboutMain";

type Props = {
  location: any
};

class About extends React.Component<Props> {
  downloadCV() {
    window.open("http://localhost:3000/cv");
  }

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

export default About;
