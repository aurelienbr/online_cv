import React from 'react';
import MobileHeader from './MobileHeader';

import Presentation from './containers/Presentation';
import About from './containers/About';
import Course from './containers/Course';
import Contact from './containers/Contact';

class MobileScreen extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader />
        <Presentation />
        <About />
        <Course />
        <Contact />
      </div>
    );
  }
}

export default MobileScreen;
