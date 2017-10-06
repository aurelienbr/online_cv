import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
	render(){
		return(
			<header className="header">
				<Link className="btn btn-primary buttonHeader" to="/">Presentation</Link>
				<Link className="btn btn-primary buttonHeader" to="/skill">Skill</Link>
				<Link className="btn btn-primary buttonHeader" to="/certifications">Certifications</Link>
				<Link className="btn btn-primary buttonHeader" to="/projects">Projects</Link>
				<Link className="btn btn-primary buttonHeader" to="/contact">Contact</Link>
			</header>
		);
	}
}