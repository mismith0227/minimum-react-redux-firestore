import { all } from 'redux-saga/effects'

export function combineSagas(sagas = []) {
  const sagaNames = sagas.map(saga => saga.name || 'Unnamed saga')
  const combinedSaga = function*() {
    yield all(sagas.map(saga => saga()))
  }
  Object.defineProperty(combinedSaga, 'name', {
    value: `combinedSaga(${sagaNames.join(', ')})`,
  })
  return combinedSaga
}
