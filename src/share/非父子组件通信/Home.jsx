import React, { Component } from 'react'
import HomeInfo from './HomeInfo'

export class Home extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div>
        <div>Home</div>
        <div>{name}</div>
        <div>{age}</div>
        <HomeInfo></HomeInfo>
      </div>
    )
  }
}

export default Home