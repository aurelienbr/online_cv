const INITIAL_STATE = {
  locale: "fr",
  translations: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TRANSLATIONS":
      return { ...state, translations: action.payload };
    case "CHANGE_LOCAL":
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};
