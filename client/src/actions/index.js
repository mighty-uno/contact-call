import { notification } from "antd";
import axios from "axios";
import {
  USER_AUTH_LOGIN,
  USER_AUTH_LOGOUT,
  USER_CONTACT_ADD,
  USER_CONTACT_LIST,
} from "./types";
import { message } from "antd";

export const login = (req) => async (dispatch) => {
  try {
    const payload = await axios.post("auth/login", req);

    if (payload.data.error) {
      notification.error({
        message: "Sign in",
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: USER_AUTH_LOGIN,
        payload: payload.data,
      });
      notification.success({
        message: "Sign in successfull",
      });
    }
  } catch (e) {
    notification.error({
      message: "Sign in",
      description: "Server Error!",
    });
  }
};

export const logout = (req) => async (dispatch) => {
  try {
    await axios.post("auth/logout", req);
    dispatch({
      type: USER_AUTH_LOGOUT,
      payload: [],
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const payload = await axios.get("api/user");

    if (payload.data.error) {
    } else if (payload.data) {
      dispatch({
        type: USER_AUTH_LOGIN,
        payload: payload.data,
      });
    }
  } catch (e) {}
};

export const signup = (req) => async (dispatch) => {
  try {
    const payload = await axios.post("auth/signup", req);

    if (payload.data.error) {
      notification.error({
        message: "Sign-up error",
        description: payload.data.error,
      });
      return false;
    } else if (payload.data.name) {
      notification.success({
        message: "Sign up successfull",
      });
      return true;
    }
  } catch (e) {
    notification.error({
      message: "Sign up",
      description: "Server Error!",
    });
    return false;
  }
};

export const getContact = (req = {}) => async (dispatch) => {
  const notification_context = "Get Contact";
  try {
    const payload = await axios.get("api/contact", req);

    if (payload.data.error) {
      notification.error({
        message: notification_context,
        description: payload.data.error,
      });
    } else if (payload.data) {
      dispatch({
        type: USER_CONTACT_LIST,
        payload: payload.data,
      });
      notification.success({
        message: notification_context,
        description: " Contact list fetched ",
      });
    }
  } catch (e) {
    notification.error({
      message: notification_context,
      description: e,
    });
  }
};

export const addContact = (req) => async (dispatch) => {
  const notification_context = "Add Contact";
  try {
    const validate = await validateMobileNumber(req.mobile);
    if (!validate) {
      notification.error({
        message: notification_context,
        description: validate.data.error,
      });
      return;
    }
    const payload = await axios.post("api/contact", req);

    if (payload.data.error) {
      notification.error({
        message: notification_context,
        description: payload.data.error,
      });
      return false;
    } else if (payload.data) {
      dispatch({
        type: USER_CONTACT_ADD,
        payload: payload.data,
      });
      notification.success({
        message: notification_context,
        description: "Contact Added",
      });

      return true;
    }
  } catch (e) {
    notification.error({
      message: notification_context,
      description: e,
    });

    return false;
  }
};

export const validateMobileNumber = async (mobile) => {
  const notification_context = "Contact";
  try {
    const payload = await axios.get(`api/contact/validate/${mobile}`);

    if (payload.data.error) {
      notification.error({
        message: notification_context,
        description: payload.data.error,
      });
      return false;
    } else if (payload.data) {
      notification.success({
        message: notification_context,
        description: "Valid",
      });

      return true;
    }
  } catch (e) {
    notification.error({
      message: notification_context,
      description: e,
    });

    return false;
  }
};
