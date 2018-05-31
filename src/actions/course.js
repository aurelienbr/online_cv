import axios from "axios";
import api from "../const/api";
import {
  GET_INTERNSHIPS,
  GET_INTERNSHIPS_ERROR,
  GET_EDUCATION,
  GET_EDUCATION_ERROR,
  GET_COORDS,
  GET_COORDS_ERROR
} from "./type";

export const getInternships = () => {
  return dispatch => {
    const API_INTERNSHIPS = api("internships");
    axios
      .get(API_INTERNSHIPS)
      .then(response => {
        dispatch({
          payload: response.data,
          type: GET_INTERNSHIPS
        });
      })
      .catch(err => {
        dispatch({
          payload: err,
          type: GET_INTERNSHIPS_ERROR
        });
      });
  };
};

export const getCoords = () => {
  return dispatch => {
    const API_COORDS = api("coords");
    axios
      .get(API_COORDS)
      .then(response => {
        dispatch({
          payload: response.data,
          type: GET_COORDS
        });
      })
      .catch(err => {
        dispatch({
          payload: err,
          type: GET_COORDS_ERROR
        });
      });
  };
};

export const getEducation = () => {
  return dispatch => {
    const API_EDUCATION = api("education");
    axios
      .get(API_EDUCATION)
      .then(response => {
        dispatch({
          payload: response.data,
          type: GET_EDUCATION
        });
      })
      .catch(err => {
        dispatch({
          payload: err,
          type: GET_EDUCATION_ERROR
        });
      });
  };
};
