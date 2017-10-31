import React from 'react';

const EducationCard = ({date, description, image, lieu, style, title}) => (
	<div style={styles.container}>
		<h3 style={styles.title}>{title}</h3>
		<p style={styles.date}>{date}</p>
		<p>{lieu}</p>
		<p>{description}</p>
	</div>
);

const styles = {
	container:{
		height: 404,
		width: 268,
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#fff',
		color: '#7f8c8d',
		marginLeft: 20,
		boxShadow: '0 10px 6px -6px #777',
	},
	date: {
		alignSelf: 'center',
		marginTop: 30
	},
	title: {
		alignSelf: 'center',
	}
}

export default EducationCard;
