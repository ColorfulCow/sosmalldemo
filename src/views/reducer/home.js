/**
 * Created by colorfulcow on 16/1/17.
 */
import { Home } from '../constants/actionTypes'

export default {
  getText (state=[],action){
    if (action.type = Home.fillText) {
      return state.concat([action.text])
    }
    return state
  }
}


const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
export default function applyMiddleware(...middlewares) {
  return (next) => (reducer, initialState) => {
    var store = next(reducer, initialState)
    var dispatch = store.dispatch
    var chain = []

    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
/*
return {
 dispatch,
 subscribe,
 getState,
 replaceReducer
 }
*/


let todoApp = combineReducers(reducers)
let store = applyMiddleware(logger)(createStore)(todoApp)

