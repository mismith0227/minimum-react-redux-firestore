import * as actionTypes from "./actionTypes";

export const loginRequested = () => ({
  type: actionTypes.LOGIN_REQUESTED
});
export const loginSucceeded = user => ({
  type: actionTypes.LOGIN_SUCCEEDED,
  payload: user
});
export const loginFailed = () => ({
  type: actionTypes.LOGIN_FAILED
});
export const logoutRequested = () => ({
  type: actionTypes.LOGOUT_REQUESTED
});
export const logoutSucceeded = user => ({
  type: actionTypes.LOGOUT_SUCCEEDED,
  payload: user
});
export const logoutFailed = () => ({
  type: actionTypes.LOGOUT_FAILED
});

export default {
  loginRequested,
  loginSucceeded,
  loginFailed,
  logoutRequested,
  logoutSucceeded,
  logoutFailed
};
