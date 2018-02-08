import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

import Text from "./Text";
import linkIcon from "../images/link.png";
import mapIcon from "../images/map.png";
import MyModal from "./MyModal";

import API_KEY from "../const/googleMapAPI";
import MapStyle from "../const/mapCustom";

class EducationCard extends Component {
  state = {
    isModalOpen: false
  };

  handleDescription = () => this.setState({ isOpen: !this.state.isOpen });

  stopPropagation = e => e.stopPropagation();

  showMap = e => {
    e.stopPropagation();
    this.setState({ isModalOpen: true });
  };

  closeMap = () => this.setState({ isModalOpen: false });

  renderMarkers = (map, maps) => {
    new maps.Marker({
      position: { lat: 44.84044, lng: -0.5805 },
      map
    });
  };

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
            <a onClick={this.showMap}>
              <img alt="icon map" src={mapIcon} style={styles.mapIcon} />
            </a>
            <a target="_tab" onClick={this.stopPropagation} href={href}>
              <img alt="link site" src={linkIcon} />
            </a>
          </div>
        </div>
        <MyModal onRequestClose={this.closeMap} isOpen={this.state.isModalOpen}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: API_KEY,
              language: "fr",
              region: "fr"
            }}
            style={styles.googleMap}
            onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
            defaultZoom={14}
            options={{ styles: [...MapStyle] }}
            defaultCenter={{ lat: 44.84044, lng: -0.5805 }} // Bordeaux
          />
        </MyModal>
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
