import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from '../../store/actionCreators';
export class About extends PureComponent {
  click(num) {
    if (num >= 0) {
      this.props.addNumber(num)
    } else {
      this.props.subNumber(num)
    }
  }
  render() {
    const { count, banners, recommends } = this.props
    return (<div>
      <div>About:{count}</div>
      <div style={{ marginTop: 20 + 'px' }}>
        <button onClick={() => this.click(100)}>+100</button>
        <button onClick={() => this.click(-50)}>-50</button>
      </div>
      <div className='banner'>
        <span>轮播图数据</span>
        <ul>
          {banners.map((v, index) => {
            return <li key={index}>{v.title}</li>
          })}
        </ul>
      </div>
      <div className='recommend'>
        <span>推荐数据</span>
        <ul>
          {recommends.map((v, index) => {
            return <li key={index}>{v.title}</li>
          })}
        </ul>
      </div>
    </div>
    )
  }
}
function fn2(dispatch) {
  return {
    addNumber(num) {
      dispatch(addNumberAction(num))
    },
    subNumber(num) {
      dispatch(subNumberAction(num))
    }
  }
}
function fn(state) {
  return {
    count: state.count,
    banners: state.banners,
    recommends: state.recommends
  }
}
export default connect(fn, fn2)(About)