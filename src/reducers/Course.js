// @flow
import type { education, internships, mapCoords } from '../type';
import type { GET_INITIAL_DATA_ACTION } from './Locale';

export type State = {
  educations: Array<education>,
  internships: Array<internships>,
  mapCoords: Array<mapCoords>,
  err_internships: any,
  err_education: any,
  err_mapCoords: any
};

export type GET_COURSE_DATA_ACTION = {
  type: 'GET_COURSE_DATA',
  internships: Array<internships>,
  educations: Array<education>
};

export type Action = GET_COURSE_DATA_ACTION | GET_INITIAL_DATA_ACTION;

const INITIAL_STATE = {
  educations: [],
  internships: [],
  mapCoords: [],
  err_internships: {},
  err_education: {},
  err_mapCoords: {}
};

export default (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case 'GET_COURSE_DATA':
      return {
        ...state,
        internships: action.internships,
        educations: action.educations
      };
    case 'GET_INITIAL_DATA':
      return { ...state, mapCoords: action.coords };
    default:
      return state;
  }
};
