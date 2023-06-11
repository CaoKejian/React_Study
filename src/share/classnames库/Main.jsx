import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class Main extends PureComponent {
  constructor() {
    super()
    this.state = {
      isbbb: true,
      isccc: true
    }
  }
  render() {
    const { isbbb, isccc } = this.state
    return (<>
      <div>Main</div>
      <h2 className={classNames('aaa', { bbb: isbbb, ccc: isccc })}>嘿嘿嘿</h2>
      <h2 className={classNames(['aaa', { bbb: isbbb, ccc: isccc }])}>xxx</h2>
    </>
    )
  }
}

export default Main