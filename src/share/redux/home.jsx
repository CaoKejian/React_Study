import React, { PureComponent } from 'react'
import store from '../../store'
import { addNumberAction } from '../../store/actionCreators'

export class Home extends PureComponent {
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ count: state.count })
    })
  }
  constructor() {
    super()
    this.state = {
      count: store.getState().count
    }
  }
  addNumber(num) {
    store.dispatch(addNumberAction(num))
  }
  render() {
    const { count } = this.state

    return (<div>
      <div>Home count: {count}</div>
      <div style={{ marginTop: 20 + 'px' }}>
        <button onClick={() => this.addNumber(1)}>+1</button>
        <button onClick={() => this.addNumber(3)}>+3</button>
        <button onClick={() => this.addNumber(5)}>+5</button>
      </div>
    </div>
    )
  }
}

export default Home