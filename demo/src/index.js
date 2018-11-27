import React, { Component } from 'react'
import { render } from 'react-dom'
import s from './index.less'

import EllipsisBox from '../../src'

class Demo extends Component {
  render () {
    return <div className={s.wrap}>
      <EllipsisBox>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</EllipsisBox>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
