// @flow
import React from "react";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";

import ExperienceMain from "./components/ExperienceMain";
import Header from "./Header";
import * as actions from "../actions/course";

type StateProps = {
  location: any,
  education: Array<Object>,
  internships: Array<Object>,
  loading: boolean,
  errInternships: Array<Object>,
  errEducation: Array<Object>
};

type DispatchProps = {
  getEducation(): void,
  getInternships(): void,
  getCoords(): void
};

type Props = StateProps & DispatchProps;

class Course extends React.Component<Props> {
  componentDidMount() {
    this.props.getInternships();
    this.props.getEducation();
    this.props.getCoords();
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
