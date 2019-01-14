import { all, call, put, takeEvery } from "redux-saga/effects";
import { FETCH_TODOS_REQUESTED } from "../actionTypes";
import { fetchTodosSucceeded, fetchTodosFailed } from "../actions";
import Api from "../../../services/api";

export function* fetchTodos(action) {
  try {
    const data = yield call([Api, Api.fetchTodos], action.payload);
    yield put(fetchTodosSucceeded(data));
  } catch (error) {
    yield put(fetchTodosFailed(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_TODOS_REQUESTED, fetchTodos)]);
}
