import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import ExperienceMain from "./components/ExperienceMain";
import Header from "./Header";
import Formation from "../text/Formation";
import Internship from "../text/internship";

const Parcours = ({ location }) => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>
          <Header location={location} />
          <ExperienceMain formation={Formation} internship={Internship} />
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <ExperienceMain mobile formation={Formation} internship={Internship} />
      </MediaQuery>
    </div>
  );
};

Parcours.propTypes = {
  location: PropTypes.array
};

export default Parcours;
