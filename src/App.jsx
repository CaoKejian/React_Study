import React, { Component } from 'react'
import Main from './share/组件插槽/Main2'

export class App extends Component {
  render() {
    return (
      <Main
        leftSlot={<button>按钮</button>}
        centerSlot={<h2>标题</h2>}
        rightSlot={<i>斜体</i>}
      ></Main>
    )
  }
}

export default App
