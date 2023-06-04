import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export class Main extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: false
    }
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>切换</button>
        {/* {isShow ?
          <div>我来啦</div> :
          <div>我走了</div>
        } */}
        <CSSTransition in={isShow} unmountOnExit={true} classNames='why' timeout={1500}>
          <h2>哈哈，我来了</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default Main