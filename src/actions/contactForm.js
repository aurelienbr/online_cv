import axios from "axios";
import {
  HANDLE_EMAIL_CHANGE,
  HANDLE_NAME_CHANGE,
  HANDLE_TEXTAREA_CHANGE,
  HANDLE_ERROR,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  SEND_EMAIL,
  SET_INITIAL_STATE
} from "../actions/type";

import { API_MAIL } from "../const/api";

import verifForm from "../tools/verifForm";

export const handleEmailChange = value => ({
  email: value,
  type: HANDLE_EMAIL_CHANGE
});

export const handleNameChange = value => ({
  name: value,
  type: HANDLE_NAME_CHANGE
});

export const handleTextAreaChange = value => ({
  textArea: value,
  type: HANDLE_TEXTAREA_CHANGE
});

export const sendEmail = (name, email, textarea, textAreaMax) => {
  return dispatch => {
    const error = verifForm(name, email, textarea, textAreaMax);
    if (Object.keys(error).length > 0) {
      return dispatch({
        type: HANDLE_ERROR,
        payload: error
      });
    }

    dispatch({
      type: SEND_EMAIL
    });

    axios
      .post(API_MAIL, {
        email: email,
        subject: name,
        text: textarea,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        dispatch({
          type: SEND_EMAIL_SUCCESS
        });
        resetState(dispatch, 2000);
      })
      .catch(error => {
        dispatch({
          type: SEND_EMAIL_FAILURE
        });
        resetState(dispatch, 2000);
      });
  };
};

const resetState = (dispatch, ms = 0) => {
  setTimeout(() => {
    dispatch({
      type: SET_INITIAL_STATE
    });
  }, ms);
};
