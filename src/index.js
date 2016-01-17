import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { createHistory } from 'history'
import { Router, Link, browserHistory} from 'react-router'
const { syncReduxAndRouter, routeReducer } = require('redux-simple-router');
import reducers from './views/reducer/index'
import Routes from './views/router'
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))
const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {Routes()}
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)

