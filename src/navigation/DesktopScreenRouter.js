// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import Presentation from '../pages/Presentation';
import About from '../pages/About';
import Course from '../pages/Course';
import Contact from '../pages/Contact';
import NoMatch from '../pages/common/NoMatch';

type Props = {};

export default (props: Props): React$Element<*> => (
  <div>
    <Route exact path="/" component={Presentation} />
    <Route path="/about" component={About} />
    <Route path="/course" component={Course} />
    <Route path="/contact" component={Contact} />
    <Route component={NoMatch} />
  </div>
);
