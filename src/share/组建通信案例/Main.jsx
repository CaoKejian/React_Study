import React, { Component } from 'react'
import TabControl from './TabControl'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      titles: ['流行', '新款', '精选'],
      tabIndex: 0
    }
  }
  tabClick(index) {
    this.setState({ tabIndex: index })
  }
  render() {
    const { tabIndex, titles } = this.state
    return (
      <div className='main'>
        <TabControl titles={titles} tabClick={i => this.tabClick(i)} />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default Main