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
        <div>
          轮播图数据：
          <ul>
            {this.props.banners.map(v => {
              return <li key={v.title}>{v.title}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const countToProps = (state) => ({
  count: state.count.count,
  banners: state.home.banners,
  recommends: state.home.recommends
})
const disPathchToProps = (dispatch) => ({
  subClick(num) {
    dispatch(subNumber(num))
  }
})
export default connect(countToProps, disPathchToProps)(Profile) 