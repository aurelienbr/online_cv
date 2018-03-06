// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FormattedMessage } from "react-intl";
import MediaQuery from "react-responsive";

type Props = {
  route: Object,
  location: Object,
  children: string,
  href?: string,
  defaultMessage?: string
};

type State = {
  active: boolean
};

class Button extends Component<Props, State> {
  state = {
    active: false
  };

  getStyle = () => {
    const { location, route } = this.props;
    let borderTop = "";
    let paddingTop = 7;

    if (location && location.pathname === route) {
      paddingTop = 0;
      borderTop = "10px solid #34495e"; // 77A391
      return { ...styles.button, paddingTop, borderTop };
    }
    return { ...styles.button, paddingTop, borderTop };
  };

  render() {
    const { children, route, defaultMessage, href } = this.props;

    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div
            onClick={() => this.setState({ active: !this.state.active })}
            style={this.getStyle()}
          >
            <Link to={route}>
              <FormattedMessage defaultMessage={defaultMessage} id={children} />
            </Link>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div style={styles.button}>
            <ScrollLink to={href} smooth={true}>
              <FormattedMessage defaultMessage={defaultMessage} id={children} />
            </ScrollLink>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const styles = {
  button: {
    paddingTop: 7,
    paddingBottom: 7,
    height: 80,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default Button;
