// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";

import ExperienceMain from "./components/ExperienceMain";
import Header from "./Header";
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
    this.props.getEducation();
  }
  render() {
    const {
      education,
      internships,
      location,
      errInternships,
      errEducation
    } = this.props;
    if (education.length === 0 || internships.length === 0) {
      return <div id="Parcours" className="backgroundParcoursContainer" />;
    }
    return (
      <div id="Parcours" className="backgroundParcoursContainer">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <ExperienceMain education={education} internship={internships} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <ExperienceMain
            mobile
            education={education}
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
