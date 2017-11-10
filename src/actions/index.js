import axios from 'axios';
const URL = 'http://localhost:3000';

export const getTranslations = () => dispatch => {
  dispatch({
    type: 'GETTING_TRANSLATION',
  });
  axios.get(URL).then(response => {
    dispatch({
      payload: response.data,
      type: 'GET_TRANSLATIONS',
    });
  });
};

export const changeLocale = (locale) => ({
	payload: locale,
	type: 'CHANGE_LOCAL',
});
