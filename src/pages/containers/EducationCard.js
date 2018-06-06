// @flow
import React from 'react';
import { connect } from 'react-redux';

import type { mapCoords } from '../../type';

import Text from '../common/Text';
import linkIcon from '../../assets/icons/link.png';
import mapIcon from '../../assets/icons/map.png';

import linkMobileIcon from '../../assets/icons/linkMobile.png';
import mapMobileIcon from '../../assets/icons/mapMobile.png';

import MyModal from '../common/MyModal';
import MyGoogleMap from './MyGoogleMap';

import type { Connector, MapStateToProps } from 'react-redux';
import type { State } from '../../reducers/reducersType';

type OwnProps = {
  isInView?: boolean,
  mobile?: boolean,
  duree: string,
  description: string,
  lieu: string,
  titre: string,
  href: string,
  coord: { lat: string, lng: string }
};

type StateProps = {
  mapCoords: Array<mapCoords>
} & OwnProps;

type Props = StateProps;

type StateComponent = {
  isModalOpen: boolean,
  isOpen: boolean
};

class EducationCard extends React.Component<Props, StateComponent> {
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
      mobile,
      mapCoords
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
        <MyModal
          style={styles.myModal}
          onRequestClose={this.closeMap}
          isOpen={this.state.isModalOpen}
        >
          <MyGoogleMap
            defaultZoom={10}
            mapCoords={mapCoords}
            defaultCenter={coord} // Bordeaux
          />
        </MyModal>
        {this.state.isOpen && (
          <div>
            <hr />
            <Text style={styles.description} id={description} size="p" />
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  myModal: {
    height: 400,
    width: 400
  },
  container: {
    border: '1px solid #89bbd3',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    cursor: 'pointer'
  },
  whiteColor: {
    color: '#fff'
  },
  description: {
    color: '#fff',
    marginTop: 20
  },
  containerData: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  mapIcon: {
    marginRight: 10
  },
  imgContainer: {
    display: 'flex'
  }
};

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = (
  state: State,
  ownProps: OwnProps
): StateProps => ({
  mapCoords: state.course.mapCoords,
  ...ownProps
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps);

export default connector(EducationCard);
