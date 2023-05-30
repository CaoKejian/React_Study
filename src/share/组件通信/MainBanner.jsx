import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class MainBanner extends Component {
  static defaultProps = {
    banners: [],
    title: "默认标题"
  }
  constructor(props) {
    console.log("MainBanner", props);
    super(props)
  }
  render() {
    const { banners } = this.props
    return (<>
      <div>MainBanner</div>
      <div>mainer</div>
      <ul>
        {banners.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </>
    )
  }
}
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string
};
// MainBanner.defaultProps = {
//   banners: [],
//   title: "默认标题"
// }

export default MainBanner