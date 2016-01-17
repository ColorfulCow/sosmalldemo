/**
 * Created by colorfulcow on 16/1/15.
 */
/**
 * Created by colorfulcow on 16/1/13.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { homeAction } from '../../actions/index'
import cx from 'classnames'

@connect(
  state => {
    return state
  },
    dispatch => {
    return bindActionCreators(homeAction, dispatch)
  }
)
class Header extends Component {
  render() {
    const { fillText, getText } = this.props
    return(
      <div>
       <h1>我是home啊啊啊啊啊</h1>
        <p>点击输入{getText}</p>
        <input type="text" onChange={(e) => {fillText(e.target.value)}}/>
      </div>
    )
  }
}
export default Header