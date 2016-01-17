/**
 * Created by colorfulcow on 16/1/13.
 */
import Story from '../constants/actionTypes'

export default {
  getStory(name) {
    return {
      type: Story.getStory,
      name
    }
  }
}