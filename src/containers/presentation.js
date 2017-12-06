import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import Header from "./header";

/* eslint-disable */
export class Presentation extends Component {
	static propTypes = {
		location: PropTypes.object.isRequired
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
				<Header location={location} />
				<div className="main mainPresentation">
					<h3 className="slide-down" style={styles.monograme}>
						AB
					</h3>
					<h1
						className={
							this.state.slideFooter ? "slide-down" : "none"
						}
						style={styles.title}
					>
						<FormattedMessage id="home.name" />
					</h1>
					<h2
						className={this.state.slideFooter ? "slide-up" : "none"}
						style={styles.pres}
					>
						<FormattedMessage id="home.fonction" />
					</h2>
				</div>
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
		fontSize: 70,
		marginTop: 30
	},
	pres: {
		marginBottom: 50
	}
};
