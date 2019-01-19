import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer(history),
    preloadedState,
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}
