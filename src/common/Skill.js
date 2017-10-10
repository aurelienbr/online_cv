import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CircularProgressBar extends React.Component {

  render() {
    const sqSize = this.props.sqSize;
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;
    return (
      <svg
          width={this.props.sqSize}
          height={this.props.sqSize}
          viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`} />
          <circle
            className="circle-progress"
            stroke={this.props.color}
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }} />
          <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle">
            {`${this.props.percentage}%`}
          </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 25,
  strokeWidth: 10
};


const Datas = [
	{color: "#9b59b6", percentage: "80", skill:"node js"},
	{color: "#2980b9", percentage: "60", skill:"react native"},
	{color: "#16a085", percentage: "90", skill:"react js"},
];

const DatasRight = [
	{color: "#f1c40f", percentage: "80", skill:"css"},
	{color: "#9b59b6", percentage: "99", skill:"html"},
	{color: "#3498db", percentage: "40", skill:"Android"},
];

class CircularRow extends React.Component{
	constructor(){
  	super();
  	this.state = {
  		percentage: 0,
  	};
  	this.cpt = 0;
  	this.duree = 0.1;
  	this.delta = Math.ceil((this.duree * 1000) / this.n);
  }
  countdown = () => {
  if( this.state.percentage < this.props.percentage ) { 
  	 this.setState({percentage: this.state.percentage + 1})
       setTimeout(this.countdown, this.delta);
    }	
  }
  componentDidMount(){
  	setTimeout(this.countdown, this.delta);
  }
	render(){
		const {color, percentage, skill} = this.props;
		return(
				<div className="circular-row">
		      <CircularProgressBar
	            strokeWidth="10"
	            sqSize="150"
	            color={color}
	            percentage={this.state.percentage}/>
	         <p className="circular-row-text">{skill.toUpperCase()}</p>
	       </div>
		);
	}
} 

export class Skill extends React.Component {
  render() {
    return (
    <ReactCSSTransitionGroup transitionName="fade" 
								transitionAppear={true}
								transitionAppearTimeout={500}
            					transitionLeaveTimeout={300}>
	      <div className="main skill">
	      	<div className="main-column">
		      	{Datas.map(data=> (
		      		<CircularRow
		      			color={data.color}
		      			percentage={data.percentage}
		      			skill={data.skill}
		      		/>
		      	))}   
		    </div>
		    <div className="main-column">
		    	{DatasRight.map(data=>(
		    		<CircularRow
		      			color={data.color}
		      			percentage={data.percentage}
		      			skill={data.skill}
		      		/>
		    	))}
		    </div>
	      </div>
	   </ReactCSSTransitionGroup>
    );
  }
}