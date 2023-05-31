import React, { Component } from 'react'
import './TabControl.css'

export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }
  itemClick(index) {
    this.setState({
      currentIndex: index
    })
    this.props.tabClick(index)
  }
  render() {
    const { titles, itemType } = this.props
    const { currentIndex } = this.state
    return (
      <div className='tabcontrol'>
        {titles.map((item, index) => {
          return <div className={`item ${index === currentIndex ? 'active' : ''}`} key={item}
            onClick={e => this.itemClick(index)}
          >
            {itemType(item)}
            {/* <span className='text'>{item}</span> */}
          </div>
        })}
      </div>
    )
  }
}

export default TabControl