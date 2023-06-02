import React, { Component } from 'react'
import Home from './Home'
import Recommend from './Recommend'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      message: 'colin',
      count: 0
    }
  }
  changeText() {
    this.setState({
      message: "colin123"
    })
  }
  shouldComponentUpdate(nextProps, newState) {
    if (this.state.message !== newState.message || this.state.count !== newState.count) {
      return true
    }
    return false
  }
  render() {
    console.log('App render');
    const { message, count } = this.state
    return (<>
      <div>message:{message} -- count:{count}</div>
      <button onClick={e => this.changeText()}>修改文本</button>
      <Home message={message}/>
      <Recommend />
    </>
    )
  }
}

export default Main