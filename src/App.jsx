import React, { Component } from 'react'
import Main from './share/组件插槽/Main'

export class App extends Component {
  render() {
    return (
      <Main >
        <button>按钮</button>
        <h2>标题</h2>
        <i>字体</i>
      </Main>
    )
  }
}

export default App
