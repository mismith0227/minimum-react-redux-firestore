import { put, call, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { push } from "connected-react-router";
import Api from "../../../services/api";
import authAction from "../actions";

function authChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = Api.authStateChanged(user => emit({ user }));
    return unsubscribe;
  });
  return channel;
}

export default function* rootSaga() {
  const channel = yield call(authChannel);
  while (true) {
    const { user } = yield take(channel);

    if (user) {
      yield put(authAction.loginSucceeded(user));
      yield put(push("/home"));
    }
  }
}
