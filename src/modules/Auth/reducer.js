import { LOGIN_SUCCEEDED, LOGOUT_SUCCEEDED } from './actionTypes'

const auth = (state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED: {
      return Object.assign({}, state, {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email,
      })
    }
    case LOGOUT_SUCCEEDED: {
      return Object.assign({}, state, {
        uid: '',
        displayName: '',
        email: '',
      })
    }
    default:
      return state
  }
}

export default auth
