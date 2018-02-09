import React from "react";
import WayPoint from "react-waypoint";

class WithinView extends React.Component {
  state = {
    isInView: false
  };
  onEnter = ({ previousPosition }) => {
    if (previousPosition === WayPoint.below || WayPoint.inside) {
      this.setState({
        isInView: true
      });
    }
  };

  onLeave = () => this.setState({ isInView: false });
  render() {
    const childWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { isInView: this.state.isInView });
    });

    return (
      <WayPoint onEnter={this.onEnter} onLeave={this.onLeave}>
        <div>{childWithProp}</div>
      </WayPoint>
    );
  }
}

export default WithinView;
