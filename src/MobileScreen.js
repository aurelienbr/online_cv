import React from "react";
import MobileHeader from "./MobileHeader";

import Presentation from "./containers/Presentation";
import About from "./containers/About";
import Parcours from "./containers/Parcours";
import ContactMobile from "./containers/ContactMobile";

class MobileScreen extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader />
        <Presentation />
        <About />
        <Parcours />
        <ContactMobile />
      </div>
    );
  }
}

export default MobileScreen;
