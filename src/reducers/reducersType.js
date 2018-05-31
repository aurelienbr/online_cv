// @flow
import type { Store as ReduxStore } from 'redux';
import type { State as courseState, Action as courseAction } from './Course';

import type {
  State as formContactState,
  Action as formContactAction
} from './FormContact';

import type { State as localeState, Action as localeAction } from './Locale';

export type State = {
  locale: localeState,
  formContact: formContactState,
  course: courseState
};

export type Action = localeAction | formContactAction | courseAction;

export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void; // eslint-disable-line no-use-before-define
export type Dispatch = (
  action: Action | Promise<Action> | ThunkAction
) => Promise<Action>;
export type Store = ReduxStore<State, Action>;
