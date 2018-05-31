// @flow
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

import MapStyle from '../const/mapCustom';
import API_KEY from '../const/googleMapAPI';

import type { mapCoords } from '../type';

type Props = {
  defaultCenter: Object,
  defaultZoom: Object,
  locale: string,
  style?: Object,
  mapCoords: Array<mapCoords>
};

class MyGoogleMap extends React.Component<Props> {
  static defaultProps = {
    defaultCenter: {
      lat: 44.84044,
      lng: -0.5805
    }
  };
  renderMarkers = (map: Object, maps: Object) => {
    const { mapCoords } = this.props;
    mapCoords.map(coord => {
      return new maps.Marker({
        position: coord,
        title: 'test',
        map
      });
    });
  };
  render() {
    const { style, defaultCenter, defaultZoom, locale } = this.props;

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: locale,
          region: locale
        }}
        yesIWantToUseGoogleMapApiInternals
        style={style}
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        defaultZoom={defaultZoom}
        options={{ styles: [...MapStyle] }}
        defaultCenter={defaultCenter} // Bordeaux
      />
    );
  }
}

const mapStateToProps = ({ locale }) => ({
  locale: locale.locale
});

export default connect(mapStateToProps)(MyGoogleMap);
