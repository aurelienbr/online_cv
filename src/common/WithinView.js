// @flow
import React from "react";
import WayPoint from "react-waypoint";

import type { Node } from "react";

type Props = {
  children: Node
};

type State = {
  isInView: boolean
};

class WithinView extends React.Component<Props, State> {
  state = {
    isInView: false
  };
  onEnter = ({ previousPosition }: Object) => {
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
