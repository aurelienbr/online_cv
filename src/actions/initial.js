// @flow
import axios from 'axios';
import api from '../const/api';

import type { ThunkAction, Dispatch } from '../reducers/reducersType';

export const getInitialData = (): ThunkAction => {
  return (dispatch: Dispatch) => {
    const API_TRANSLATION = api('translations');
    const API_COORDS = api('coords');

    const translation_promise = axios.get(API_TRANSLATION);
    const coords_promise = axios.get(API_COORDS);

    Promise.all([translation_promise, coords_promise]).then(response => {
      dispatch({
        translations: response[0].data,
        coords: response[1].data,
        type: 'GET_INITIAL_DATA'
      });
    });
  };
};
