import React, { Component } from 'react'

export class MainProductList extends Component {
  constructor(props) {
    console.log("MainProductList", props);
    super(props)
  }
  render() {
    const { productList } = this.props
    return (<>
      <div>MainProductList</div>
      <ul>
        {productList.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </>
    )
  }
}

export default MainProductList