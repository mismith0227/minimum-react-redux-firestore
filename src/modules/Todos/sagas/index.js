import { all, call } from "redux-saga/effects";
import addTodo from "./addTodo";
import deleteTodo from "./deleteTodo";
import changeCompleted from "./changeCompleted";
import fetchTodo from "./fetchTodo";

export default function* todosSaga() {
  yield all([
    call(addTodo),
    call(changeCompleted),
    call(deleteTodo),
    call(fetchTodo)
  ]);
}
