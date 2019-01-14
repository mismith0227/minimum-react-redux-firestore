import * as types from "./actionTypes";
import { createAction } from "redux-actions";

export const addTodoRequested = createAction(types.ADD_TODO_REQUESTED);
export const addTodoSucceeded = createAction(types.ADD_TODO_SUCCEEDED);
export const addTodoFailed = createAction(types.ADD_TODO_FAILED);

export const changeCompletedRequested = createAction(
  types.CHANGE_COMPLETED_REQUESTED
);
export const changeCompletedSucceeded = createAction(
  types.CHANGE_COMPLETED_SUCCEEDED
);
export const changeCompletedFailed = createAction(
  types.CHANGE_COMPLETED_FAILED
);

export const deleteTodoRequested = createAction(types.DELETE_TODO_REQUESTED);
export const deleteTodoSucceeded = createAction(types.DELETE_TODO_SUCCEEDED);
export const deleteTodoFailed = createAction(types.DELETE_TODO_FAILED);

export const fetchTodosRequested = createAction(types.FETCH_TODOS_REQUESTED);
export const fetchTodosSucceeded = createAction(types.FETCH_TODOS_SUCCEEDED);
export const fetchTodosFailed = createAction(types.FETCH_TODOS_FAILED);

export default {
  addTodoRequested,
  addTodoSucceeded,
  addTodoFailed,
  changeCompletedRequested,
  changeCompletedSucceeded,
  changeCompletedFailed,
  deleteTodoRequested,
  deleteTodoSucceeded,
  deleteTodoFailed,
  fetchTodosRequested,
  fetchTodosSucceeded,
  fetchTodosFailed
};
