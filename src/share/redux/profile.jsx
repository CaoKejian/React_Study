import React, { PureComponent } from 'react'
import store from '../../store'

export class Profile extends PureComponent {
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.count })
    })
  }
  constructor() {
    super()
    this.state = {
      counter: store.getState().count
    }
  }
  render() {
    const { counter } = this.state

    return (<div>
      <div>Profile Counter: {counter}</div>
      <div style={{ marginTop: 20 + 'px' }}>
        <button>-1</button>
        <button>-3</button>
        <button>-5</button>
      </div>
    </div>
    )
  }
}

export default Profile