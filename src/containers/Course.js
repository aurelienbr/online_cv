// @flow
import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";

import ExperienceMain from "./components/ExperienceMain";
import Header from "./Header";
import Education from "../const/education";
import * as actions from "../actions/course";

type Props = {
  location: any,
  education: array<Object>,
  internships: array<Object>,
  loading: boolean,
  errInternships: array<Object>,
  errEducation: array<Object>
};

class Course extends React.Component<Props> {
  componentDidMount() {
    this.props.getInternships();
  }
  render() {
    const {
      education,
      internships,
      loading,
      errInternships,
      errEducation,
      location
    } = this.props;
    if (loading) {
      return <div id="Parcours" className="backgroundParcoursContainer" />;
    }
    return (
      <div id="Parcours" className="backgroundParcoursContainer">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <ExperienceMain education={Education} internship={internships} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <ExperienceMain
            mobile
            education={Education}
            internship={internships}
          />
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToprops = ({ course }) => ({
  education: course.education,
  internships: course.internships,
  loading: course.loading,
  errInternships: course.errInternships,
  errEducation: course.errEducation
});

export default connect(mapStateToprops, actions)(Course);
