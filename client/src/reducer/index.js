import { combineReducers } from "redux";
import authReducer from "./authReducer";

import contacts from "./contacts";

const appReducer = combineReducers({
  auth: authReducer,
  contacts,
});

const rootReducer = (state, action) => {
  debugger;
  if (action && action.type == "USER_AUTH_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
