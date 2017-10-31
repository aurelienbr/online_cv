import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom';

import{
  Presentation,
  Skill,
  Certification,
  Projects,
  Contact
}from './containers';

export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Presentation}/>
          <Route path="/skill" component={Skill}/>
          <Route path="/certifications" component={Certification}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}