import { all, call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUESTED } from "../actionTypes";
import authAction from "../actions";
import Api from "../../../services/api";

export function* login() {
  try {
    let data = yield call([Api, Api.login]);
    yield put(authAction.loginSucceeded(data.user));
  } catch (error) {
    yield put(authAction.loginFailed(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(LOGIN_REQUESTED, login)]);
}
