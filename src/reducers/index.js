import { combineReducers } from "redux";
import locale from "./Locale";
import formContact from "./FormContact";
import course from "./Course";

export default combineReducers({
  locale,
  formContact,
  course
});
