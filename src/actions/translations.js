import TRANSLATIONS from "../const/translations";
import { GET_TRANSLATIONS, CHANGE_LOCAL } from "./type";

export const getTranslations = () => ({
  payload: TRANSLATIONS,
  type: GET_TRANSLATIONS
});

export const changeLocale = locale => ({
  payload: locale,
  type: CHANGE_LOCAL
});
