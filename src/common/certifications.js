import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Certification = () =>{
	return(
		<ReactCSSTransitionGroup transitionName="fade" 
									transitionAppear={true}
									transitionAppearTimeout={500}
            						transitionLeaveTimeout={300}>
			<div style={{backgroundColor:'#8e44ad'}} className="main">
				Certification
			</div>
		</ReactCSSTransitionGroup>
	);
}