import React, { Component } from 'react'
import './Main.css'
export class Main extends Component {
  render() {
    const { children } = this.props
    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default Main