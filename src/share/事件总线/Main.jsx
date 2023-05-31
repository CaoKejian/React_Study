import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class Main extends Component {
  componentDidMount() {
    eventBus.on('bannerPrev', (...e) => {
      console.log('args:', e);
    })
  }
  render() {
    return (
      <div>
        <h2>Main</h2>
        <Home></Home>
      </div>
    )
  }
}

export default Main