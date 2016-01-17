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