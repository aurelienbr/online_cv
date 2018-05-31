import axios from 'axios';
import api from '../const/api';
import { GET_TRANSLATIONS, CHANGE_LOCAL, GET_TRANSLATIONS_ERROR } from './type';

export const getTranslations = () => {
  return dispatch => {
    const API_TRANSLATION = api('translations');
    axios
      .get(API_TRANSLATION)
      .then(response => {
        dispatch({
          payload: response.data,
          type: GET_TRANSLATIONS
        });
      })
      .catch(err => {
        dispatch({
          payload: err,
          type: GET_TRANSLATIONS_ERROR
        });
      });
  };
};

export const changeLocale = locale => ({
  payload: locale,
  type: CHANGE_LOCAL
});
