import { all, call } from 'redux-saga/effects'
import login from './login'
import logout from './logout'
import listenAuth from './listenAuth'

export default function* authSaga() {
  yield all([call(login), call(logout), call(listenAuth)])
}
