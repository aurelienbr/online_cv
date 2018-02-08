import React from "react";
import GoogleMapReact from "google-map-react";

import MapStyle from "../const/mapCustom";
import API_KEY from "../const/googleMapAPI";
import coordTowns from "../const/coordTowns";

class MyGoogleMap extends React.Component {
  renderMarkers = (map, maps) => {
    coordTowns.map(coord => {
      return new maps.Marker({
        position: coord,
        map
      });
    });
  };
  render() {
    const { style, defaultCenter, defaultZoom } = this.props;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
          language: "fr",
          region: "fr"
        }}
        style={style}
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        defaultZoom={defaultZoom}
        options={{ styles: [...MapStyle] }}
        defaultCenter={defaultCenter} // Bordeaux
      />
    );
  }
}

export default MyGoogleMap;
