import { all, call, put, takeEvery } from 'redux-saga/effects'
import { ADD_TODO_REQUESTED } from '../actionTypes'
import { addTodoSucceeded, addTodoFailed } from '../actions'
import Api from '../../../services/api'

export function* addTodo(action) {
  try {
    const data = yield call([Api, Api.addTodo], action.payload)
    yield put(addTodoSucceeded({ key: data, name: action.payload }))
  } catch (error) {
    yield put(addTodoFailed(error))
  }
}

export default function* rootSaga() {
  yield all([takeEvery(ADD_TODO_REQUESTED, addTodo)])
}
