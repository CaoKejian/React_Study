import React, { Component } from 'react'

export class Home extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (this.props.message !== newProps.message) {
      return true
    }
    return false
  }
  render() {
    console.log('Home render');
    return (
      <div>
        <h2>Home Page:{this.props.message}</h2>
      </div>
    )
  }
}

export default Home