import React, { Component } from 'react'
import ThemeContext from './context/theme-context'

export class HomeInfo extends Component {
  render() {
    console.log(this.context);
    return (
      <div>HomeInfot</div>
    )
  }
}

HomeInfo.contextType = ThemeContext
export default HomeInfo