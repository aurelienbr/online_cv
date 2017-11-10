import React from 'react';
/* eslint-disable */
class Arrow extends React.Component{
	state = {
		animation: false,
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({animation: true})
		},800)
	}
	render(){
		const { style } = this.props;
		return(
			<div className={this.state.animation ? "slide-up-presentation" : "none"} style={style}>
				<img style={{alignSelf: 'center'}} src={require('../images/next.png')} />
			</div>
		);
	}
}

export default Arrow;