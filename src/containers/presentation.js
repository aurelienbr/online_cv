import React, { Component } from "react";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';
import { Element } from 'react-scroll'; 

import Text from "../common/Text";
import Header from "./header";

/* eslint-disable */
export class Presentation extends Component {
	static propTypes = {
		location: PropTypes.object
	};

	state = {
		slideFooter: false
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ slideFooter: true });
		}, 500);
		setTimeout(() => {
			this.setState({ slideTitle: true });
		}, 50);
	}

	render() {
		const { location } = this.props;
		return (
			<div>
				<MediaQuery query="(min-device-width: 1224px)">
					<Header location={location} />
					<div className="main mainPresentation">
						<h3 className="slide-down" style={styles.monograme}>
							AB
						</h3>
						<Text
							className={
								this.state.slideFooter ? "slide-down" : "none"
							}
							size="h1"
							id="home.name"
							style={styles.title}
						/>
						<Text
							className={this.state.slideFooter ? "slide-up" : "none"}
							size="h2"
							id="home.fonction"
							style={styles.pres}
						/>
					</div>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1224px)">
					<div className="main mainPresentation">
						<h3 className="slide-down" style={styles.monograme}>
							AB
						</h3>
						<Text
							className={
								this.state.slideFooter ? "slide-down" : "none"
							}
							size="h3"
							id="home.name"
							style={styles.title}
						/>
						<Text
							className={this.state.slideFooter ? "slide-up" : "none"}
							size="p"
							id="home.fonction"
							style={styles.pres}
						/>
					</div>
				</MediaQuery>
			</div>
		);
	}
}

const styles = {
	monograme: {
		fontSize: 35,
		height: 80,
		width: 80,
		border: "5px solid #fff",
		borderRadius: 200,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 50,
		boxShadow: "0 0 5px 5px #888"
	},
	title: {
		marginTop: 30
	},
	pres: {
		marginBottom: 50
	}
};
