import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

import ButtonContact from "./ButtonContact";
import ModalContact from "./ModalContact";

import MapStyle from "../../const/mapCustom";
import API_KEY from "../../const/googleMapAPI";

class ContactMain extends React.Component {
  renderMarkers = (map, maps) => {
    new maps.Marker({
      position: { lat: 44.84044, lng: -0.5805 },
      map
    });
  };

  render() {
    const {
      mobile,
      handleNameChange,
      handleEmailChange,
      handleTextAreaChange,
      sendEmail,
      name,
      email,
      textarea,
      location,
      isModalOpen,
      openModal,
      onRequestClose
    } = this.props;

    return (
      <div>
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
        <ModalContact
          sendEmail={sendEmail}
          onRequestClose={onRequestClose}
          isOpen={isModalOpen}
        />
        <ButtonContact onClick={openModal}>Contact me</ButtonContact>
      </div>
    );
  }
}

const styles = {
  googleMap: {
    position: "absolute",
    zIndex: -2,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  }
};

ContactMain.propTypes = {
  mobile: PropTypes.bool,
  handleNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired
};

export default ContactMain;
