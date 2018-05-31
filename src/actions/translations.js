// @flow
import axios from 'axios';
import api from '../const/api';

import type { ThunkAction, Dispatch } from '../reducers/reducersType';
import type { CHANGE_LOCAL_ACTION } from '../reducers/Locale';

export const getTranslations = (): ThunkAction => {
  return (dispatch: Dispatch) => {
    const API_TRANSLATION = api('translations');
    axios
      .get(API_TRANSLATION)
      .then(response => {
        dispatch({
          payload: response.data,
          type: 'GET_TRANSLATIONS'
        });
      })
      .catch(err => {
        dispatch({
          payload: err,
          type: 'GET_TRANSLATIONS_ERROR'
        });
      });
  };
};

export const changeLocale = (locale: string): CHANGE_LOCAL_ACTION => ({
  payload: locale,
  type: 'CHANGE_LOCAL'
});
