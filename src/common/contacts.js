import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ContainerContacts from '../design_components/containerContacts';
import{FormGroup,
	FormControl,
	HelpBlock,
	ControlLabel} from 'react-bootstrap';

export class Contact extends React.Component{
	constructor(){
		super();
		this.state = {
			name:'',
			email:'',
			textarea:''
		}
	}

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmailChange(e){
  	this.setState({ email:e.target.value });
  }
  handleTextAreaChange(e){
  	this.setState({ textarea:e.target.value });
  }
	render(){
		return(
			<ReactCSSTransitionGroup transitionName="fade" 
										transitionAppear={true}
										transitionAppearTimeout={500}
	            						transitionLeaveTimeout={300}>
				<div className="main contacts">
					<ContainerContacts>
						<form>
					        <FormGroup
					          bsStyle="form-group label"
	 				          controlId="formBasicText"
					        >
					          <ControlLabel>Name :</ControlLabel>
					          <FormControl
					          	bsSize="small"
					            type="text"
					            value={this.state.name}
					            placeholder="Enter text"
					            onChange={this.handleNameChange.bind(this)}
					          />
					        </FormGroup>
					        <FormGroup
					          bsSize="small"
	 				          controlId="formBasicText"
					        >
					          <ControlLabel>E-mail :</ControlLabel>
					          <FormControl
					            type="text"
					            value={this.state.email}
					            placeholder="Enter text"
					            onChange={this.handleEmailChange.bind(this)}
					          />
					        </FormGroup>
					        <FormGroup
					          bsSize="small"
	 				          controlId="formBasicText"
					        >
					          <ControlLabel>Content :</ControlLabel>
					          <FormControl
					            componentClass="textarea"
					            value={this.state.textarea}
					            placeholder="Enter text"
					            onChange={this.handleTextAreaChange.bind(this)}
					          />
				        </FormGroup>
				      </form>
					</ContainerContacts>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}