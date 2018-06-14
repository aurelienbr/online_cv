// @flow
import axios from 'axios';
import api from '../const/api';

import type { ThunkAction, Dispatch } from '../reducers/reducersType';

export const getData = (): ThunkAction => {
  return (dispatch: Dispatch) => {
    const API_INTERNSHIPS = api('internships');
    const API_EDUCATION = api('educations');

    let promise_internship = axios.get(API_INTERNSHIPS);
    let promise_education = axios.get(API_EDUCATION);

    Promise.all([promise_internship, promise_education]).then(response => {
      dispatch({
        type: 'GET_COURSE_DATA',
        internships: response[0].data,
        educations: response[1].data
      });
    });
  };
};
