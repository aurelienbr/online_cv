import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export const Skill =() =>{
	return(
		<ReactCSSTransitionGroup transitionName="fade" 
									transitionAppear={true}
									transitionAppearTimeout={500}
            						transitionLeaveTimeout={300}>
			<div style={{backgroundColor:'#16a085'}} className="main">
				Certification
			</div>
		</ReactCSSTransitionGroup>
	);
}