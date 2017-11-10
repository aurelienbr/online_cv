import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
/* eslint-disable */
import MyModal from './Modal';
class EducationCard extends Component{
	state = {
		isOpen: false,
	}
	handleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render(){
		const {date, description, image, lieu, style, title} = this.props;
		return(
			<div className="boum-boum" style={styles.container}>
				<p style={styles.title}>{title}</p>
				<p style={styles.date}>{date}</p>
				<p>{lieu}</p>
				<p style={styles.description}>{description}</p>
				<button onClick={this.handleModal} style={styles.btnMap}>see on map</button>
				<MyModal handleModal={this.handleModal} isOpen={this.state.isOpen}>wjhwer</MyModal>
			</div>
		);
	}
}


const styles = {
	btnMap: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	container:{
		minHeight: 404,
		height: 'auto',
		width: 268,
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#fff',
		color: '#7f8c8d',
		boxShadow: '0 10px 6px -6px #777',
		textAlign: 'center',
		position: 'relative',
	},
	date: {
		marginTop: 30
	},
	description: {
		textAlign: 'justify',
		textJustify: 'inter-word',
		padding: 10,
	}
}

export default EducationCard;
