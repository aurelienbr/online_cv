import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom';

import Header from './containers/header';

import{
  Presentation,
  Skill,
  Certification,
  Projects,
  Contact
}from './common';

export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Header/>
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