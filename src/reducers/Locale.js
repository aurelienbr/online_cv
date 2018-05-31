import {
  GET_TRANSLATIONS,
  CHANGE_LOCAL,
  GET_TRANSLATIONS_ERROR
} from '../actions/type';

const INITIAL_STATE = {
  locale:
    navigator.language.substring(0, 2).toLowerCase() ||
    navigator.userLanguage.substring(0, 2).toLowerCase() ||
    'en',
  translations: [],
  err: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TRANSLATIONS:
      return { ...state, translations: action.payload };
    case CHANGE_LOCAL:
      return { ...state, locale: action.payload };
    case GET_TRANSLATIONS_ERROR:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};
