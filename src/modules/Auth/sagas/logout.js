import { all, call, put, takeEvery } from "redux-saga/effects";
import { LOGOUT_REQUESTED } from "../actionTypes";
import authAction from "../actions";
import Api from "../../../services/api";

export function* logout() {
  try {
    yield call([Api, Api.logout]);
    yield put(authAction.logoutSucceeded());
  } catch (error) {
    yield put(authAction.logoutFailed(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(LOGOUT_REQUESTED, logout)]);
}
