import axios from 'axios'
import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: ['新歌曲', '新歌单', '新mv'],
      productList: ['推荐商品', '热门商品', '流行商品']
    }
  }
  componentDidMount() {
    axios.get('https://autumnfish.cn/api/joke').then(res => {
      console.log(res);
    })
  }
  render() {
    const { banners, productList } = this.state
    return (
      <div>
        <div>main</div>
        <MainBanner banners={banners} title={'轮播图'} />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main