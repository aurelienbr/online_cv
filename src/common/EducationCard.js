import React, { Component } from "react";
import PropTypes from "prop-types";

import Text from "./Text";

class EducationCard extends Component {
  state = {
    isOpen: false
  };

  handleDescription = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { duree, description, lieu, titre } = this.props;
    return (
      <div
        onClick={this.handleDescription}
        className="educationCard"
        style={styles.container}
      >
        <Text
          style={{ ...styles.title, ...styles.whiteColor }}
          id={titre}
          size="p"
        />
        <Text
          style={{ ...styles.date, ...styles.whiteColor }}
          id={duree}
          size="p"
        />
        <Text style={styles.whiteColor} id={lieu} size="p" />
        {this.state.isOpen && (
          <Text style={styles.whiteColor} id={description} size="p" />
        )}
      </div>
    );
  }
}

EducationCard.propTypes = {
  duree: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired
};

const styles = {
  container: {
    border: "1px solid #89bbd3",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    cursor: "pointer"
  },
  whiteColor: {
    color: "#fff"
  }
};

export default EducationCard;
