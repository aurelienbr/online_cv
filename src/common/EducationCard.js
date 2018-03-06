// @flow
import React, { Component } from "react";

import Text from "./Text";
import linkIcon from "../assets/icons/link.png";
import mapIcon from "../assets/icons/map.png";

import linkMobileIcon from "../assets/icons/linkMobile.png";
import mapMobileIcon from "../assets/icons/mapMobile.png";

import MyModal from "./MyModal";
import MyGoogleMap from "./MyGoogleMap";

type Props = {
  duree: string,
  description: string,
  lieu: string,
  titre: string,
  href: string,
  coord: Object,
  isInView?: boolean,
  mobile?: boolean
};

type State = {
  isModalOpen: boolean,
  isOpen: boolean
};

class EducationCard extends Component<Props, State> {
  state = {
    isModalOpen: false,
    isOpen: false
  };
  handleDescription = () => this.setState({ isOpen: !this.state.isOpen });

  stopPropagation = (e: SyntheticEvent<HTMLButtonElement>) =>
    e.stopPropagation();

  showMap = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    this.setState({ isModalOpen: true });
  };

  closeMap = () => this.setState({ isModalOpen: false });

  render() {
    const {
      duree,
      description,
      lieu,
      titre,
      href,
      coord,
      isInView,
      mobile
    } = this.props;

    if (!isInView) {
      return <div style={{ minHeight: 150 }} />;
    }

    return (
      <div
        onClick={this.handleDescription}
        className="educationCard"
        style={styles.container}
      >
        <div style={styles.containerData}>
          <div>
            <Text style={styles.whiteColor} id={titre} size="p" />
            <Text style={styles.whiteColor} id={duree} size="p" />
            <Text style={styles.whiteColor} id={lieu} size="p" />
          </div>
          <div style={styles.imgContainer}>
            <a onClick={this.showMap}>
              <img
                alt="icon map"
                src={mobile ? mapMobileIcon : mapIcon}
                style={styles.mapIcon}
              />
            </a>
            <a target="_tab" onClick={this.stopPropagation} href={href}>
              <img alt="link site" src={mobile ? linkMobileIcon : linkIcon} />
            </a>
          </div>
        </div>
        <MyModal onRequestClose={this.closeMap} isOpen={this.state.isModalOpen}>
          <MyGoogleMap
            defaultZoom={10}
            defaultCenter={coord} // Bordeaux
          />
        </MyModal>
        {this.state.isOpen && (
          <Text style={styles.whiteColor} id={description} size="p" />
        )}
      </div>
    );
  }
}

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
  },
  imgContainer: {
    display: "flex"
  }
};

export default EducationCard;
