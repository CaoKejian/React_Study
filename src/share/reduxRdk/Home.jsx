import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../../store2/modules/count'
import { fetchHomeMultidataAction } from '../../store2/modules/home'

export class Home extends PureComponent {
  componentDidMount(){
    this.props.fetchHomeMultidata()
  }
  click(num) {
    this.props.click(num)
  }
  render() {
    return (<div>
      <div>Home Count: {this.props.count}</div>
      <button onClick={() => this.click(1)}>+1</button>
      <button onClick={() => this.click(10)}>+10</button>
    </div>
    )
  }
}

const countToProps = (state) => ({
  count: state.count.count,
  banners: state.home.banners,
  recommends: state.home.recommends
})
const clickToProps = (dispatch) => ({
  click(num) {
    dispatch(addNumber(num))
  },
  fetchHomeMultidata(){
    dispatch(fetchHomeMultidataAction())
  }
})
export default connect(countToProps, clickToProps)(Home) 