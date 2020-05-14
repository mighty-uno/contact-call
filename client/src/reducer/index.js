import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contacts from "./contacts";

export default combineReducers({
  auth: authReducer,
  contacts,
});
