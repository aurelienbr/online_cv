import React from "react";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';

import Header from "./header";
import axios from "axios";

/* eslint-disable */
export class Contact extends React.Component {
	static propTypes = {
		location: PropTypes.array,
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
			<div id="contact">
				<MediaQuery query="(max-device-width: 1224px)">
					<div className="main">
						<form>
							<label>Name :</label>
							<input
								bsSize="small"
								type="text"
								value={this.state.name}
								placeholder="Enter your name"
								onChange={this.handleNameChange.bind(this)}
							/>
							<label>E-mail :</label>
							<input
								type="text"
								value={this.state.email}
								placeholder="Enter your email adress"
								onChange={this.handleEmailChange.bind(this)}
							/>
							<label>Content :</label>
							<input
								style={{ width: "90%" }}
								componentClass="textarea"
								value={this.state.textarea}
								placeholder="Enter text"
								onChange={this.handleTextAreaChange.bind(this)}
							/>
							<button onClick={this.sendEmail.bind(this)}>
								send
							</button>
						</form>
					</div>
				</MediaQuery>
				<MediaQuery query="(min-device-width: 1224px)">
					<Header location={location} />
					<div className="main">
						<form>
							<label>Name :</label>
							<input
								bsSize="small"
								type="text"
								value={this.state.name}
								placeholder="Enter your name"
								onChange={this.handleNameChange.bind(this)}
							/>
							<label>E-mail :</label>
							<input
								type="text"
								value={this.state.email}
								placeholder="Enter your email adress"
								onChange={this.handleEmailChange.bind(this)}
							/>
							<label>Content :</label>
							<input
								style={{ width: "90%" }}
								componentClass="textarea"
								value={this.state.textarea}
								placeholder="Enter text"
								onChange={this.handleTextAreaChange.bind(this)}
							/>
							<button onClick={this.sendEmail.bind(this)}>
								send
							</button>
						</form>
					</div>
				</MediaQuery>
			</div>
		);
	}
}
