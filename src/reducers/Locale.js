// @flow
import type { translations } from '../type';

export type State = {
  locale: string,
  translations: translations,
  err: any,
  loading: boolean
};

export type GET_TRANSLATIONS_ACTION = {
  type: 'GET_TRANSLATIONS',
  payload: translations
};

export type CHANGE_LOCAL_ACTION = {
  type: 'CHANGE_LOCAL',
  payload: string
};

export type GET_TRANSLATIONS_ERROR_ACTION = {
  type: 'GET_TRANSLATIONS_ERROR',
  payload: any
};

export type Action = GET_TRANSLATIONS_ACTION | CHANGE_LOCAL_ACTION | GET_TRANSLATIONS_ERROR_ACTION;

const INITIAL_STATE = {
  locale: navigator.language.substring(0, 2).toLowerCase() || 'en',
  translations: {},
  err: {},
  loading: true
};

export default (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case 'GET_TRANSLATIONS':
      return { ...state, translations: action.payload, loading: false };
    case 'CHANGE_LOCAL':
      return { ...state, locale: action.payload };
    case 'GET_TRANSLATIONS_ERROR':
      return { ...state, err: action.payload, loading: false };
    default:
      return state;
  }
};
