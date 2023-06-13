import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Profile from './Profile'
import './style.css'
export class Main extends PureComponent {
  render() {
    const { count } = this.props
    console.log(count);
    return (
      <div>
        <div>App count: {count}</div>
        <div className='pages'>
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count.count
})
export default connect(mapStateToProps)(Main)