import { Header } from '../constants/actionTypes'

export default {
  loadPages(index) {
    return {
      type: Header.loadPages,
      index
    }
  }
}