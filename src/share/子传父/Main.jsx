import axios from 'axios'
import React, { Component } from 'react'
import AddCount from './AddCount'
import SubCounter from './SubCounter'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      count: 100
    }
  }
  changeCount(count) {
    this.setState({ count: this.state.count + count })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h2>当前:{count}</h2>
        <AddCount addClick={(count) => this.changeCount(count)} />
        <SubCounter subCount={(count) => this.changeCount(-count)} />
      </div>
    )
  }
}

export default Main