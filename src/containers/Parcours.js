// @flow
import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import ExperienceMain from "./components/ExperienceMain";
import Header from "./Header";
import Education from "../const/education";
import Internship from "../const/internship";

type Props = {
  location: any
}

const Parcours = ({ location }: Props) => {
  return (
    <div id="Parcours" className="backgroundParcoursContainer">
      <MediaQuery query="(min-device-width: 1224px)">
        <div>
          <Header location={location} />
          <ExperienceMain education={Education} internship={Internship} />
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <ExperienceMain mobile education={Education} internship={Internship} />
      </MediaQuery>
    </div>
  );
};

Parcours.propTypes = {
  location: PropTypes.object
};

export default Parcours;
