/**
 * Created by colorfulcow on 16/1/8.
 */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import cx from 'classnames'
import HeaderContent from './HeaderContent'
import { headerAction } from '../../actions/index'
import header from './header-style.css'

const menuItems = [
  { text: 'LifeBoard', link: '/lifeBoard' },
  { text: 'WithPhoto', link: '/withPhoto'},
  { text: 'Step', link: '/step'},
  { text: 'Story', link: '/story'}
]

@connect(
  state => {
    return state
  },
  dispatch => {
    return bindActionCreators(headerAction, dispatch)
  }
)
class Header extends Component {
  render() {
    const { loadPages } = this.props
    return (
      <div>
        <div className={cx(header.header, header.container)}>
          { menuItems.map((current, i) => {
            return <HeaderContent {...current} loadPages={loadPages} key={i} />
          }) }
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Header