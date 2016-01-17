/**
 * Created by colorfulcow on 16/1/12.
 */
import { Header } from '../constants/actionTypes'

export default {
  getPaths(state=[], action) {
    if (action.type === Header.loadPages){
      return state.concat(action.index)
    }
    return state
  },
  getComments(state=[], action) {
    if (action.type === Header.loadPages) {
      return state.concat(['getComments'])
    }
    return state
  }
}

