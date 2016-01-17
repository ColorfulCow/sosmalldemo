/**
 * Created by colorfulcow on 16/1/17.
 */
import { Home } from '../constants/actionTypes'

export default {
  fillText(text) {
    return {
      type: Home.fillText,
      text
    }
  }
}