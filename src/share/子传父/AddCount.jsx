import React, { Component } from 'react'

export class AddCount extends Component {
  addcount(count) {
    this.props.addClick(count)
  }
  render() {
    return (<>
      <button onClick={e => this.addcount(1)}>+1</button>
      <button onClick={e => this.addcount(5)}>+5</button>
      <button onClick={e => this.addcount(10)}>+10</button>
    </>
    )
  }
}

export default AddCount