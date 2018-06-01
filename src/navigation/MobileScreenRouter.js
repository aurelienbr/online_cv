// @flow
import React from 'react';
import HeaderMobile from '../headers/HeaderMobile';

import Presentation from '../pages/Presentation';
import About from '../pages/About';
import Course from '../pages/Course';
import Contact from '../pages/Contact';

export default () => (
  <div>
    <HeaderMobile />
    <Presentation />
    <About />
    <Course />
    <Contact />
  </div>
);
