import { GET_TRANSLATIONS, CHANGE_LOCAL } from "../actions/type";

const INITIAL_STATE = {
  locale:
    navigator.language.substring(0, 2).toLowerCase() ||
    navigator.userLanguage.substring(0, 2).toLowerCase() ||
    "en",
  translations: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TRANSLATIONS:
      return { ...state, translations: action.payload };
    case CHANGE_LOCAL:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};
