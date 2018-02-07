import React from "react";
import MobileHeader from "./MobileHeader";

import Presentation from "./containers/Presentation";
import About from "./containers/About";
import Parcours from "./containers/Parcours";
import Contact from "./containers/Contact";

class MobileScreen extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader />
        <Presentation />
        <About />
        <Parcours />
        <Contact />
      </div>
    );
  }
}

export default MobileScreen;
