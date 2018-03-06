// @flow
import React from "react";

import ButtonContact from "./ButtonContact";
import MyModal from "../../common/MyModal";
import FormContact from "./FormContact";
import MyGoogleMap from "../../common/MyGoogleMap";

import coordTowns from "../../const/coordTowns";

type Props = {
  mobile?: boolean,
  loadingMail: boolean,
  sendEmail: Function
}

type State = {
  isModalOpen: boolean
}

class ContactMain extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  renderMarkers = (map: any, maps: any) => {
    new maps.Marker({
      position: { lat: 44.84044, lng: -0.5805 },
      map
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { sendEmail, loadingMail } = this.props;

    const { isModalOpen } = this.state;

    return (
      <div>
        <MyGoogleMap
          defaultCenter={coordTowns[1]} // bordeaux
          style={styles.googleMap}
          defaultZoom={14}
        />
        <MyModal isOpen={isModalOpen} onRequestClose={this.closeModal}>
          <FormContact loadingMail={loadingMail} sendEmail={sendEmail} />
        </MyModal>
        <ButtonContact onClick={this.openModal}>Contact me</ButtonContact>
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

export default ContactMain;
