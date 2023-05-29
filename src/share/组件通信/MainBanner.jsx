import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props) {
    console.log("MainBanner", props);
    super(props)
  }
  render() {
    const { banners } = this.props
    return (<>
      <div>MainBanner</div>
      <ul>
        {banners.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </>
    )
  }
}

export default MainBanner