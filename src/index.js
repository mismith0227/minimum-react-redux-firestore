import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import Routes from './routes'

const store = configureStore()

ReactDOM.render(
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </StoreProvider>,
  document.getElementById('index')
)
