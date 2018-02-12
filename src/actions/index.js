import TRANSLATIONS from '../const/translations';

export const getTranslations = () => ({
  payload: TRANSLATIONS,
  type: "GET_TRANSLATIONS"
});

export const changeLocale = locale => ({
  payload: locale,
  type: "CHANGE_LOCAL"
});
