import React, { Component } from 'react'
import eventBus from './utils/event-bus';

export class HomeBanner extends Component {
  prevClick() {
    console.log('上');
    eventBus.emit('bannerPrev', 1, 101)
  }
  nextClick() {
    console.log('下');

  }
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={e => this.prevClick()}>上一个</button>
        <button onClick={e => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner