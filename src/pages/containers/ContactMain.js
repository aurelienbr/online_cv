// @flow
import React from 'react';
import { connect } from 'react-redux';

import ButtonContact from '../common/ButtonContact';
import MyModal from '../common/MyModal';
import FormContact from './FormContact';
import MyGoogleMap from './MyGoogleMap';

import type { mapCoords } from '../../type';
import type { Connector, MapStateToProps } from 'react-redux';
import type { State } from '../../reducers/reducersType';

type OwnProps = { mobile?: boolean, sendEmail: Function };

type Props = {
  mapCoords: Array<mapCoords>
} & OwnProps;

type StateComponent = {
  isModalOpen: boolean
};

class ContactMain extends React.Component<Props, StateComponent> {
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

  render(): React$Element<*> {
    const { mapCoords, sendEmail } = this.props;

    const { isModalOpen } = this.state;

    return (
      <div>
        <MyGoogleMap
          mapCoords={mapCoords}
          defaultCenter={mapCoords[1]} // bordeaux
          style={styles.googleMap}
          defaultZoom={14}
        />
        <MyModal isOpen={isModalOpen} onRequestClose={this.closeModal}>
          <FormContact sendEmail={sendEmail} />
        </MyModal>
        <ButtonContact onClick={this.openModal}>Contact me</ButtonContact>
      </div>
    );
  }
}

const styles = {
  googleMap: {
    position: 'absolute',
    zIndex: -2,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  }
};

const mapStateToProps: MapStateToProps<State, OwnProps, Props> = (
  state: State,
  ownProps: OwnProps
): Props => ({
  mapCoords: state.course.mapCoords,
  ...ownProps
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps);

export default connector(ContactMain);
