import React, { Component } from "react";
import PropTypes from "prop-types";

import Text from "./Text";
import linkIcon from "../images/link.png";
import mapIcon from "../images/map.png";

class EducationCard extends Component {
  state = {
    isOpen: false
  };

  handleDescription = () => this.setState({ isOpen: !this.state.isOpen });
  stopPropagation = e => e.stopPropagation();

  render() {
    const { duree, description, lieu, titre, href } = this.props;
    return (
      <div
        onClick={this.handleDescription}
        className="educationCard"
        style={styles.container}
      >
        <div style={styles.containerData}>
          <div>
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
          </div>
          <div>
            <img src={mapIcon} style={styles.mapIcon} />
            <a
              alt="link web site"
              target="_tab"
              onClick={this.stopPropagation}
              href={href}
            >
              <img alt="icon map" src={linkIcon} />
            </a>
          </div>
        </div>
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
  },
  containerData: {
    display: "flex",
    justifyContent: "space-between"
  },
  mapIcon: {
    marginRight: 10
  }
};

export default EducationCard;
