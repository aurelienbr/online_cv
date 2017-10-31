import React,{Component} from 'react';
import Button from '../common/Button';

const BUTTONS = [
	{to: "/", text: "Home"},
	{to: "/skill", text: "About me"},
	{to: "/certifications", text: "Education"},
	{to: "/projects", text: "Projects"},
	{to: "/contact", text: "Contact"}
]

export default class Header extends Component{
	render(){
		const { location } = this.props;
		return(
			<header className="header">
				<div className="headerName">
					AURELIEN BRACHET
				</div>
				<div className="headerMenu">
					{BUTTONS.map(button=> <Button location={location} route={button.to}>{button.text}</Button>)}
				</div>
			</header>
		);
	}
}