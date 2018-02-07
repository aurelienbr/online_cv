import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import PresentationMain from "./components/PresentationMain";
import Header from "./Header";

class Presentation extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  state = {
    slideFooter: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ slideFooter: true });
    }, 500);
    setTimeout(() => {
      this.setState({ slideTitle: true });
    }, 50);
  }

  render() {
    const { location } = this.props;
    const { slideFooter } = this.state;

    return (
      <div id="Home">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <PresentationMain slideFooter={slideFooter} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <PresentationMain mobile slideFooter={slideFooter} />
        </MediaQuery>
      </div>
    );
  }
}

export default Presentation;
