// @flow
export type State = {
  name: string,
  email: string,
  textArea: string,
  textAreaMax: number,
  loadingMail: boolean,
  errorForm: boolean,
  errorSendEmail: boolean,
  emailSuccess: boolean,
  error: {
    name: string,
    email: string,
    textArea: string
  }
};

export type SET_INITIAL_STATE_ACTION = {
  type: 'SET_INITIAL_STATE'
};
export type HANDLE_EMAIL_CHANGE_ACTION = {
  type: 'HANDLE_EMAIL_CHANGE',
  email: string
};
export type HANDLE_NAME_CHANGE_ACTION = {
  type: 'HANDLE_NAME_CHANGE',
  name: string
};
export type HANDLE_TEXTAREA_CHANGE_ACTION = {
  type: 'HANDLE_TEXTAREA_CHANGE',
  textArea: string
};
export type SEND_EMAIL_ACTION = {
  type: 'SEND_EMAIL'
};

export type SEND_EMAIL_FAILURE_ACTION = {
  type: 'SEND_EMAIL_FAILURE'
};
export type SEND_EMAIL_SUCCESS_ACTION = {
  type: 'SEND_EMAIL_SUCCESS'
};

export type HANDLE_ERROR_ACTION = {
  type: 'HANDLE_ERROR',
  payload: any
};

export type Action =
  | SET_INITIAL_STATE_ACTION
  | HANDLE_NAME_CHANGE_ACTION
  | HANDLE_EMAIL_CHANGE_ACTION
  | HANDLE_TEXTAREA_CHANGE_ACTION
  | SEND_EMAIL_ACTION
  | SEND_EMAIL_FAILURE_ACTION
  | SEND_EMAIL_SUCCESS_ACTION
  | HANDLE_ERROR_ACTION;

const INITIAL_STATE = {
  name: '',
  email: '',
  textArea: '',
  textAreaMax: 360,
  loadingMail: false,
  errorForm: false,
  emailSuccess: false,
  errorSendEmail: false,
  error: {
    name: '',
    email: '',
    textArea: ''
  }
};

export default (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return INITIAL_STATE;
    case 'HANDLE_NAME_CHANGE':
      return {
        ...state,
        name: action.name,
        error: { ...state.error, name: '' }
      };
    case 'HANDLE_EMAIL_CHANGE':
      return {
        ...state,
        email: action.email,
        error: { ...state.error, email: '' }
      };
    case 'HANDLE_TEXTAREA_CHANGE':
      return {
        ...state,
        textArea: action.textArea,
        error: { ...state.error, textArea: '' },
        textAreaMax: 360 - action.textArea.length
      };
    case 'SEND_EMAIL':
      return { ...state, errorForm: false, loadingMail: true };
    case 'SEND_EMAIL_FAILURE':
      return { ...state, errorSendEmail: true, loadingMail: false };
    case 'SEND_EMAIL_SUCCESS':
      return { ...INITIAL_STATE, emailSuccess: true };
    case 'HANDLE_ERROR':
      return { ...state, errorForm: true, error: action.payload };
    default:
      return state;
  }
};
