import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../../store2/modules/count'

export class Profile extends PureComponent {
  click(num) {
    this.props.subClick(num)
  }
  render() {
    return (
      <div>
        <div>Profile Count:  {this.props.count}</div>
        <button onClick={() => this.click(5)}>-5</button>
        <button onClick={() => this.click(10)}>-10</button>
      </div>
    )
  }
}

const countToProps = (state) => ({
  count: state.count.count
})
const disPathchToProps = (dispatch) => ({
  subClick(num) {
    dispatch(subNumber(num))
  }
})
export default connect(countToProps, disPathchToProps)(Profile) 