import axios from "axios";

import { API_MAIL } from "../const/api";

import type {
  SET_INITIAL_STATE_ACTION,
  HANDLE_NAME_CHANGE_ACTION,
  HANDLE_EMAIL_CHANGE_ACTION,
  HANDLE_TEXTAREA_CHANGE_ACTION,
  SEND_EMAIL_ACTION,
  SEND_EMAIL_FAILURE_ACTION,
  SEND_EMAIL_SUCCESS_ACTION,
  HANDLE_ERROR_ACTION
} from "../reducers/FormContact";

import verifForm from "../tools/verifForm";

export const handleEmailChange = (
  email: string
): HANDLE_EMAIL_CHANGE_ACTION => ({
  email,
  type: "HANDLE_EMAIL_CHANGE"
});

export const handleNameChange = (name: string): HANDLE_NAME_CHANGE_ACTION => ({
  name,
  type: "HANDLE_NAME_CHANGE"
});

export const handleTextAreaChange = (
  textArea: string
): HANDLE_TEXTAREA_CHANGE_ACTION => ({
  textArea,
  type: "HANDLE_TEXTAREA_CHANGE"
});

export const sendEmail = (
  name: string,
  email: string,
  textarea: string,
  textAreaMax: number
) => {
  return dispatch => {
    const error = verifForm(name, email, textarea, textAreaMax);
    if (Object.keys(error).length > 0) {
      return dispatch(emailFailure());
    }

    dispatch(sendEmail());

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
        dispatch(emailSuccess());
        resetState(dispatch, 2000);
      })
      .catch(error => {
        dispatch(emailSendError(error));
        resetState(dispatch, 2000);
      });
  };
};

const emailFailure = (): SEND_EMAIL_FAILURE_ACTION => ({
  type: "SEND_EMAIL_FAILURE"
});

const emailSendError = (): HANDLE_ERROR_ACTION => ({
  type: "HANDLE_ERROR",
  payload: error
});

const emailSuccess = (): SEND_EMAIL_SUCCESS_ACTION => ({
  type: "SEND_EMAIL_SUCCESS"
});

const sendEmail = (): SEND_EMAIL_ACTION => ({
  type: "SEND_EMAIL"
});

const resetState = (dispatch, ms = 0): SET_INITIAL_STATE_ACTION => {
  setTimeout(() => {
    dispatch({
      type: "SET_INITIAL_STATE"
    });
  }, ms);
};
