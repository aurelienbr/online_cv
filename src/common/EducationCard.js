import React, { Component } from "react";

/* eslint-disable */
class EducationCard extends Component {
	render() {
		const { date, description, image, lieu, style, title } = this.props;
		return (
			<div className="educationCard" style={styles.container}>
				<p style={styles.title}>{title}</p>
				<p style={styles.date}>{date}</p>
				<p>{lieu}</p>
				<p style={styles.description}>{description}</p>
			</div>
		);
	}
}

const styles = {
	btnMap: {
		position: "absolute",
		bottom: 0,
		right: 0
	},
	container: {
		minHeight: 404,
		height: "auto",
		width: 268,
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		color: "#7f8c8d",
		boxShadow: "0 10px 6px -6px #777",
		textAlign: "center",
		position: "relative"
	},
	date: {
		marginTop: 30
	},
	description: {
		textAlign: "justify",
		textJustify: "inter-word",
		padding: 10
	}
};

export default EducationCard;
