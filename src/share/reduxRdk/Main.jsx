import React, { PureComponent } from 'react'
import Home from './Home'
import Profile from './Profile'
import './style.css'
export class Main extends PureComponent {
  render() {
    return (
      <div>
        <div>App count: 0</div>
        <div className='pages'>
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

export default Main