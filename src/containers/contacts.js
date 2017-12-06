import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
	FormGroup,
	FormControl,
	ControlLabel
} from "react-bootstrap";
import PropTypes from 'prop-types';


import Header from "./header";
import axios from "axios";

/* eslint-disable */
export class Contact extends React.Component {
	static propTypes = {
		location: PropTypes.array.isRequired,
	};

	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			textarea: ""
		};
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}
	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}
	handleTextAreaChange(e) {
		this.setState({ textarea: e.target.value });
	}
	sendEmail(event) {
		event.preventDefault();
		axios
			.post("http://localhost:3000/mail", {
				email: this.state.email,
				subject: this.state.name,
				text: this.state.textarea,
				headers: {
					"Content-type": "application/x-www-form-urlencoded"
				}
			})
			.then(response => console.log(response))
			.catch(error => console.log(error));
	}

	render() {
		const { location } = this.props;
		return (
			<div>
				<Header location={location} />
				<ReactCSSTransitionGroup
					transitionName="fade"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionLeaveTimeout={300}
				>
					<div className="main contacts">
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
									placeholder="Enter your name"
									onChange={this.handleNameChange.bind(this)}
								/>
							</FormGroup>
							<FormGroup bsSize="small" controlId="formBasicText">
								<ControlLabel>E-mail :</ControlLabel>
								<FormControl
									type="text"
									value={this.state.email}
									placeholder="Enter your email adress"
									onChange={this.handleEmailChange.bind(this)}
								/>
							</FormGroup>
							<FormGroup bsSize="small" controlId="formBasicText">
								<ControlLabel>Content :</ControlLabel>
								<FormControl
									style={{ width: "90%" }}
									componentClass="textarea"
									value={this.state.textarea}
									placeholder="Enter text"
									onChange={this.handleTextAreaChange.bind(
										this
									)}
								/>
							</FormGroup>
							<button onClick={this.sendEmail.bind(this)}>
								send
							</button>
						</form>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
