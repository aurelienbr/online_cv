// @flow
import React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';

import ExperienceMain from './containers/ExperienceMain';
import Header from '../headers/Header';
import { getData } from '../actions/course';

import type {
  Connector,
  MapDispatchToProps,
  MapStateToProps
} from 'react-redux';
import type { Action, Dispatch, State } from '../reducers/reducersType';

type OwnProps = { location?: any };

type StateProps = {
  educations: Array<Object>,
  internships: Array<Object>,
  err_internships: any,
  err_education: any
} & OwnProps;

type DispatchProps = {
  getData(): void
};

type Props = StateProps & DispatchProps;

class Course extends React.Component<Props> {
  componentDidMount() {
    this.props.getData();
  }
  render(): React$Element<*> {
    const {
      educations,
      internships,
      location,
      err_internships,
      err_education
    } = this.props;
    if (
      Object.keys(err_internships).length > 0 ||
      Object.keys(err_education).length > 0
    ) {
      return <div>Oups something went wrong...</div>; // TODO
    }

    return (
      <div id="Parcours" className="backgroundParcoursContainer">
        <MediaQuery query="(min-device-width: 1224px)">
          <div>
            <Header location={location} />
            <ExperienceMain educations={educations} internship={internships} />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <ExperienceMain
            mobile
            educations={educations}
            internship={internships}
          />
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = (
  state: State,
  ownProps: OwnProps
): StateProps => ({
  educations: state.course.educations,
  internships: state.course.internships,
  err_internships: state.course.err_internships,
  err_education: state.course.err_education,
  ...ownProps
});

const mapDispatchToProps: MapDispatchToProps<
  Action,
  OwnProps,
  DispatchProps
> = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  getData: () => {
    dispatch(getData());
  }
});

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Course);
