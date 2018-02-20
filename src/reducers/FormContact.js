const INITIAL_STATE = {
  name: "",
  email: "",
  textArea: "",
  textAreaMax: 360,
  error: {
    name: "",
    email: "",
    textArea: ""
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HANDLE_NAME_CHANGE":
      return {
        ...state,
        name: action.payload,
        error: { ...state.error, name: "" }
      };
    case "HANDLE_EMAIL_CHANGE":
      return {
        ...state,
        email: action.payload,
        error: { ...state.error, email: "" }
      };
    case "HANDLE_TEXTAREA_CHANGE":
      return {
        ...state,
        textArea: action.payload,
        error: { ...state.error, textArea: "" },
        textAreaMax: 360 - state.textArea.length
      };
    case "HANDLE_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
