import { USER_CONTACT_LIST, USER_CONTACT_ADD } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case USER_CONTACT_LIST:
      state = [...state, ...action.payload];
      return state;

    case USER_CONTACT_ADD:
      state = [...state, action.payload];
      return state;

    default:
      return state;
  }
}
