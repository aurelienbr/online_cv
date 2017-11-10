import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Header from "./header";

export const Projects = ({ location }) => {
	return (
		<div>
			<Header location={location} />
			<div className="main">Project</div>
		</div>
	);
};
