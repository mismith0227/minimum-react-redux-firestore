import { all, call, put, takeEvery } from 'redux-saga/effects'
import { CHANGE_COMPLETED_REQUESTED } from '../actionTypes'
import { changeCompletedSucceeded, changeCompletedFailed } from '../actions'
import Api from '../../../services/api'

export function* changeCompleted(action) {
  try {
    const data = yield call([Api, Api.changeCompleted], action.payload)
    yield put(
      changeCompletedSucceeded({
        key: action.payload.key,
        completed: action.payload.completed,
      })
    )
  } catch (error) {
    yield put(changeCompletedFailed(error))
  }
}

export default function* rootSaga() {
  yield all([takeEvery(CHANGE_COMPLETED_REQUESTED, changeCompleted)])
}
