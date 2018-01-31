import React from "react";
import MobileHeader from "./MobileHeader";
import { Presentation, About, Parcours, Contact } from "./containers";

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
