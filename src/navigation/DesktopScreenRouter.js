// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import Presentation from '../pages/Presentation';
import About from '../pages/About';
import Course from '../pages/Course';
import Contact from '../pages/Contact';

type Props = {};

export default (props: Props): React$Element<*> => (
  <div>
    <Route exact path="/" component={Presentation} />
    <Route path="/about" component={About} />
    <Route path="/course" component={Course} />
    <Route path="/contact" component={Contact} />
  </div>
);
