import React, { PureComponent } from 'react'
import s from './index.less'
import cls from 'classnames'

export default class EllipsisBox extends PureComponent {
  state = {
    isFolded: true,
  }

  toggleFolded = () => {
    this.setState(prevState => ({ isFolded: !prevState.isFolded }))
  }

  render () {
    const { isFolded } = this.state
    const { backgroundColor, className, dangerouslySetInnerHTML } = this.props
    return (
      <div className={cls(s.ellipsis, isFolded && s.folded, className)}>
        <div className={s.content}>
          <div className={s.text} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>{this.props.children}</div>
          {
            !isFolded &&
            <span className={s.link} onClick={this.toggleFolded}> 折叠</span>
          }
          <div className={s.overlay}>
            <div className={s.placeholder} />
            <div
              className={s.more}
              style={{ backgroundColor }}
              onClick={this.toggleFolded}
            >...
              <span className={s.link}>展开</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
