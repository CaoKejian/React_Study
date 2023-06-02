import React, { Component } from 'react'

export class Recommend extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('Recommend render');
    return (
      <div>
        <h2>Recommend page</h2>
      </div>
    )
  }
}

export default Recommend