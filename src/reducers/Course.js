import {
  GET_INTERNSHIPS,
  GET_INTERNSHIPS_ERROR,
  GET_EDUCATION,
  GET_EDUCATION_ERROR,
  GET_COORDS,
  GET_COORDS_ERROR
} from "../actions/type";

const INITIAL_STATE = {
  education: [],
  internships: [],
  mapCoords: [],
  err_internships: {},
  err_education: {},
  err_mapCoords: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_INTERNSHIPS:
      return { ...state, internships: action.payload };
    case GET_INTERNSHIPS_ERROR:
      return { ...state, locale: action.payload };
    case GET_COORDS:
      return {...state, mapCoords: action.payload};
    case GET_COORDS_ERROR:
      return {...state, err_mapCoords: action.payload};
    case GET_EDUCATION:
      return { ...state, education: action.payload };
    case GET_EDUCATION_ERROR:
      return { ...state, err_internships: action.payload };
    default:
      return state;
  }
};
