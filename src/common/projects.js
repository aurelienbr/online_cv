import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Projects = () =>{
	return(
		<ReactCSSTransitionGroup transitionName="fade" 
									transitionAppear={true}
									transitionAppearTimeout={500}
            						transitionLeaveTimeout={300}>
			<div style={{backgroundColor:'#d35400'}} className="main">
				Project
			</div>
		</ReactCSSTransitionGroup>
	);
}