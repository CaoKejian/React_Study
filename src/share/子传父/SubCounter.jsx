import React, { Component } from 'react'

export class SubCounter extends Component {
  addcount(count) {
    this.props.subCount(count)
  }
  render() {
    return (<>
      <button onClick={e => this.addcount(1)}>-1</button>
      <button onClick={e => this.addcount(5)}>-5</button>
      <button onClick={e => this.addcount(10)}>-10</button>
    </>
    )
  }
}

export default SubCounter