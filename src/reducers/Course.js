// @flow
import type { education, internships, mapCoords } from '../type';

export type State = {
  education: Array<education>,
  internships: Array<internships>,
  mapCoords: Array<mapCoords>,
  err_internships: any,
  err_education: any,
  err_mapCoords: any
};

export type GET_INTERNSHIS_ACTION = {
  type: 'GET_INTERNSHIPS',
  payload: Array<internships>
};

export type GET_INTERNSHIS_ERROR_ACTION = {
  type: 'GET_INTERNSHIPS_ERROR',
  payload: any
};

export type GET_COORDS_ACTION = {
  type: 'GET_COORDS',
  payload: Array<mapCoords>
};

export type GET_COORDS_ERROR_ACTION = {
  type: 'GET_COORDS_ERROR',
  payload: any
};

export type GET_EDUCATION_ACTION = {
  type: 'GET_EDUCATION',
  payload: Array<education>
};

export type GET_EDUCATION_ERROR_ACTION = {
  type: 'GET_EDUCATION_ERROR',
  payload: any
};

export type Action =
  | GET_INTERNSHIS_ACTION
  | GET_INTERNSHIS_ERROR_ACTION
  | GET_COORDS_ACTION
  | GET_COORDS_ERROR_ACTION
  | GET_EDUCATION_ACTION
  | GET_EDUCATION_ERROR_ACTION;

const INITIAL_STATE = {
  education: [],
  internships: [],
  mapCoords: [],
  err_internships: {},
  err_education: {},
  err_mapCoords: {}
};

export default (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case 'GET_INTERNSHIPS':
      return { ...state, internships: action.payload };
    case 'GET_INTERNSHIPS_ERROR':
      return { ...state, locale: action.payload };
    case 'GET_COORDS':
      return { ...state, mapCoords: action.payload };
    case 'GET_COORDS_ERROR':
      return { ...state, err_mapCoords: action.payload };
    case 'GET_EDUCATION':
      return { ...state, education: action.payload };
    case 'GET_EDUCATION_ERROR':
      return { ...state, err_internships: action.payload };
    default:
      return state;
  }
};
