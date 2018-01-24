import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
/* eslint-disable */
import { FormattedMessage } from 'react-intl';
import MediaQuery from 'react-responsive';

class Button extends Component{
	state = {
		active: false,
	}

	getStyle = () => {
		const { location, route } = this.props;
		styles.button.borderTop = '';
		styles.button.paddingTop = 7;

		if(location && location.pathname === route){
			styles.button.paddingTop = 0;
			styles.button.borderTop = '10px solid #77A391';
			return styles.button;
		}
		return styles.button;
	}

	getMobileStyle = () => {
		const { selected } = this.props;
		return styles.button;
	}

	render(){
		const { children, route, defaultMessage, href } = this.props;
		return(
			<div>
				<MediaQuery query="(min-device-width: 1224px)">
					<div onClick={()=> this.setState({active: !this.state.active})} style={this.getStyle()}>
						<Link to={route}><FormattedMessage defaultMessage={defaultMessage} id={children}/></Link>
					</div>
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1224px)">
					<div style={this.getMobileStyle()}>
						<ScrollLink to={href} smooth={true}>
							<FormattedMessage defaultMessage={defaultMessage} id={children} />
						</ScrollLink>
					</div>
				</MediaQuery>
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
