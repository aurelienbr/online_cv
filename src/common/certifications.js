import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Stages } from './parcoursSections';

export const Certification = () =>{
	return(
		<ReactCSSTransitionGroup transitionName="fade" 
									transitionAppear={true}
									transitionAppearTimeout={500}
            						transitionLeaveTimeout={300}>
			<div className="main">
				<div style={style}>
					<Stages/>
				</div>
			</div>
		</ReactCSSTransitionGroup>
	);
}

const style = {
	width: '55%',
	display: 'flex',
	flexDirection: 'column',
	padding: '20px',
}