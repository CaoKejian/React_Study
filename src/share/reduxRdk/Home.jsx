import axios from 'axios'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import store from '../../store2'
import { addNumber } from '../../store2/modules/count'
import { changeBanners, changeRecommends } from '../../store2/modules/home'

export class Home extends PureComponent {
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      store.dispatch(changeBanners(banners))
      store.dispatch(changeRecommends(recommends))
    })
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
  }
})
export default connect(countToProps, clickToProps)(Home) 