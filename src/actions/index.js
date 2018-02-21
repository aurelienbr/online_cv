import TRANSLATIONS from "../const/translations";

export const getTranslations = () => ({
  payload: TRANSLATIONS,
  type: "GET_TRANSLATIONS"
});

export const changeLocale = locale => ({
  payload: locale,
  type: "CHANGE_LOCAL"
});

export const handleEmailChange = value => ({
  payload: value,
  type: "HANDLE_EMAIL_CHANGE"
});

export const handleNameChange = value => ({
  payload: value,
  type: "HANDLE_NAME_CHANGE"
});

export const handleTextAreaChange = value => ({
  payload: value,
  type: "HANDLE_TEXTAREA_CHANGE"
});

export const setFormErrors = error => ({
  payload: error,
  type: "HANDLE_ERROR"
});
