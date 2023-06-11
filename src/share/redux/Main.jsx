import React, { PureComponent } from 'react'
import Home from './home'
import Profile from './profile'
import './style.css'
import store from '../../store'
import About from './about'

export class Main extends PureComponent {
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
    return (
      <div>
        <h2>Main counter: {counter}</h2>
        <div className='pages'>
          <Home />
          <Profile />
          <About />
        </div>
      </div>
    )
  }
}

export default Main