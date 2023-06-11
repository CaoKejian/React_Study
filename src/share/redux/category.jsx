import axios from 'axios'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import store from '../../store'
import { changeBannersAction, changeRecommendsAction } from '../../store/actionCreators'

export class Category extends PureComponent {
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      console.log(banners, recommends);
      // store.dispatch(changeBannersAction(banners))
      // store.dispatch(changeRecommendsAction(recommends))
      this.props.changeBanners(banners)
      this.props.changeRecommends(recommends)
    })
  }
  render() {
    return (<div>
      <div>Category</div>

    </div>
    )
  }
}

function mapDispatchProps(dispatch) {
  return {
    changeBanners(banners) {
      dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends) {
      dispatch(changeRecommendsAction(recommends))
    }
  }
}
export default connect(null, mapDispatchProps)(Category);
