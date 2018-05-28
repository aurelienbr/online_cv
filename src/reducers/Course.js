import {
  GET_INTERNSHIPS,
  GET_INTERNSHIPS_ERROR,
  GET_EDUCATION,
  GET_EDUCATION_ERROR
} from "../actions/type";

const INITIAL_STATE = {
  education: [],
  internships: [],
  err_internships: {},
  err_education: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_INTERNSHIPS:
      return { ...state, internships: action.payload };
    case GET_INTERNSHIPS_ERROR:
      return { ...state, locale: action.payload };
    case GET_EDUCATION:
      return { ...state, education: action.payload };
    case GET_EDUCATION_ERROR:
      return { ...state, err_internships: action.payload };
    default:
      return state;
  }
};
