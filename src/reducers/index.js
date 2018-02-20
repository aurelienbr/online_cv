import { combineReducers } from "redux";
import locale from "./Locale";
import formContact from "./FormContact";

export default combineReducers({
  locale,
  formContact
});
