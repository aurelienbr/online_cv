// @flow
import axios from 'axios';
import api from '../const/api';

import verifForm from '../tools/verifForm';

import type { Dispatch, ThunkAction } from '../reducers/reducersType';
import type {
  HANDLE_EMAIL_CHANGE_ACTION,
  HANDLE_NAME_CHANGE_ACTION,
  HANDLE_TEXTAREA_CHANGE_ACTION
} from '../reducers/FormContact';

export const handleEmailChange = (value: string): HANDLE_EMAIL_CHANGE_ACTION => ({
  email: value,
  type: 'HANDLE_EMAIL_CHANGE'
});

export const handleNameChange = (value: string): HANDLE_NAME_CHANGE_ACTION => ({
  name: value,
  type: 'HANDLE_NAME_CHANGE'
});

export const handleTextAreaChange = (value: string): HANDLE_TEXTAREA_CHANGE_ACTION => ({
  textArea: value,
  type: 'HANDLE_TEXTAREA_CHANGE'
});

export const sendEmail = (
  name: string,
  email: string,
  textarea: string,
  textAreaMax: number
): ThunkAction => {
  return (dispatch: Dispatch) => {
    const error = verifForm(name, email, textarea, textAreaMax);
    if (Object.keys(error).length > 0) {
      dispatch({
        type: 'HANDLE_ERROR',
        payload: error
      });
    } else {
      dispatch({
        type: 'SEND_EMAIL'
      });

      axios
        .post(api('mail'), {
          email: email,
          subject: name,
          text: textarea,
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        })
        .then(response => {
          dispatch({
            type: 'SEND_EMAIL_SUCCESS'
          });
          resetState(dispatch, 2000);
        })
        .catch(error => {
          dispatch({
            type: 'SEND_EMAIL_FAILURE'
          });
          resetState(dispatch, 2000);
        });
    }
  };
};

const resetState = (dispatch: Dispatch, ms: number = 0) => {
  setTimeout(() => {
    dispatch({
      type: 'SET_INITIAL_STATE'
    });
  }, ms);
};
