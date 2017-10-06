import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import presentation from '../text/presentation';
import Container from '../design_components/container';

export class Presentation extends React.Component{
	constructor(){
		super();
		this.state={
			slide:false
		}
	}
	componentWillMount(){
		this.onSlide();
	}
	onSlide(){
		console.log('coucou');
		setTimeout(()=>{
			this.setState({
				slide:true
			});
		},1000)
	}
	render(){
		return(
		<ReactCSSTransitionGroup transitionName="fade" 
									transitionAppear={true}
									transitionAppearTimeout={500}
            						transitionLeaveTimeout={300}>
			<div  
					className="main mainPresentation">

					<Container className="slide">
						{presentation.map((presen)=>{
							return(
									<div className="marginAuto">
										<h2 className={this.state.slide ? "slide-down" : 'displayNone'}>{presen.title}</h2>
										{this.state.slide ? <hr/> : <div></div>}
										<p className={this.state.slide ? "slide-up" : 'displayNone'}>
											{presen.content}
										</p>
									</div>
							);
						})}
					</Container>	
			</div>
		</ReactCSSTransitionGroup>
	);
	}
}