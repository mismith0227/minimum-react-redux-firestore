import { all, call, put, takeEvery } from "redux-saga/effects";
import { DELETE_TODO_REQUESTED } from "../actionTypes";
import { deleteTodoSucceeded, deleteTodoFailed } from "../actions";
import Api from "../../../services/api";

export function* deleteTodo(action) {
  try {
    const data = yield call([Api, Api.deleteTodo], action.payload);
    yield put(deleteTodoSucceeded({ key: action.payload }));
  } catch (error) {
    yield put(deleteTodoFailed(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(DELETE_TODO_REQUESTED, deleteTodo)]);
}
