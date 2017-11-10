import React, { Component } from "react";
import Button from "../common/Button";
import { connect } from "react-redux";
import * as actions from "../actions";

const BUTTONS = [
	{ to: "/", id: "header.home", defaultMessage: "Home" },
	{ to: "/skill", id: "header.about", defaultMessage: "About" },
	{
		to: "/certifications",
		id: "header.education",
		defaultMessage: "Education"
	},
	{ to: "/contact", id: "header.contact", defaultMessage: "Contact" }
];
/* eslint-disable */
class Header extends Component {
	changeFr = () => {
		this.props.changeLocale("fr");
	};
	changeRu = () => {
		this.props.changeLocale("ru");
	};
	changeEn = () => {
		this.props.changeLocale("en");
	};
	render() {
		const { location } = this.props;
		return (
			<header className="header">
				<div className="headerName">AURELIEN BRACHET</div>
				<div>
					<button onClick={this.changeFr}>fr</button>
					<button onClick={this.changeEn}>en</button>
					<button onClick={this.changeRu}>ru</button>
				</div>
				<div className="headerMenu">
					{BUTTONS.map(button => (
						<Button
							key={button.id}
							location={location}
							route={button.to}
						>
							{button.id}
						</Button>
					))}
				</div>
			</header>
		);
	}
}

export default connect(undefined, actions)(Header);
