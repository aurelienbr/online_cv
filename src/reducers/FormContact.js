import {
  HANDLE_EMAIL_CHANGE,
  HANDLE_NAME_CHANGE,
  HANDLE_TEXTAREA_CHANGE,
  HANDLE_ERROR,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  SEND_EMAIL,
  SET_INITIAL_STATE
} from "../actions/type.js";

const INITIAL_STATE = {
  name: "",
  email: "",
  textArea: "",
  textAreaMax: 360,
  loadingMail: false,
  errorSendEmail: false,
  emailSuccess: false,
  error: {
    name: "",
    email: "",
    textarea: ""
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return INITIAL_STATE;
    case HANDLE_NAME_CHANGE:
      return {
        ...state,
        name: action.payload,
        error: { ...state.error, name: "" }
      };
    case HANDLE_EMAIL_CHANGE:
      return {
        ...state,
        email: action.payload,
        error: { ...state.error, email: "" }
      };
    case HANDLE_TEXTAREA_CHANGE:
      return {
        ...state,
        textArea: action.payload,
        error: { ...state.error, textarea: "" },
        textAreaMax: 360 - action.payload.length
      };
    case SEND_EMAIL:
      return { ...state, errorSendEmail: false, loadingMail: true };
    case SEND_EMAIL_FAILURE:
      return { ...state, emailFailure: true, loadingMail: false };
    case SEND_EMAIL_SUCCESS:
      return { ...INITIAL_STATE, emailSuccess: true };
    case HANDLE_ERROR:
      return { ...state, errorSendEmail: true, error: action.payload };
    default:
      return state;
  }
};
