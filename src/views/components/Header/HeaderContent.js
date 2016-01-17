/**
 * Created by colorfulcow on 16/1/9.
 */
import React from 'react'
import { Link } from 'react-router'
const { routeActions } = require('redux-simple-router');
import cx from 'classnames'
import header from './header-style.css'

export default
class HeaderContent extends React.Component {

  fuck() {
    this.props.loadPages('1')
  }

  renderLink() {
    return (
      <Link to={this.props.link} className={cx(header.link)}>
        {this.props.text}
      </Link>
    )
  }

  render() {
    return (
      <li className={cx(header.list)} onClick={()=>{this.fuck()}}>
        {this.renderLink()}
      </li>
    )
  }
}