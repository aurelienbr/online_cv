import React, { Component } from 'react';
import {Link} from 'react-router-dom';
/* eslint-disable */
import { FormattedMessage } from 'react-intl';

class Button extends Component{
	state = {
		active: false,
	}

	getStyle = () => {
		const { location, route } = this.props;
		styles.button.borderTop = '';
		styles.button.paddingTop = 7;

		if(location.pathname === route){
			styles.button.paddingTop = 0;
			styles.button.borderTop = '10px solid #77A391';
			return styles.button;
		}
		return styles.button;
	}

	render(){
		const { children, route, defaultMessage } = this.props;
		return(
			<div onClick={()=> this.setState({active: !this.state.active})} style={this.getStyle()}>
				<Link to={route}><FormattedMessage defaultMessage={defaultMessage} id={children}/></Link>
			</div>
		);
	}
}

const styles = {
	button: {
		paddingTop: 7,
		paddingBottom: 7,
		height: 80,
		textTransform: 'uppercase',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 150,
		paddingLeft: 10,
		paddingRight: 10,
	}
}

export default Button;
