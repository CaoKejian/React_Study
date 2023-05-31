import React, { Component } from 'react'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      message: "colin",
      count: 0
    }
  }
  changeText() {
    /*
      1、基本使用
     */
    // this.setState({
    //   message: 'colin123'
    // })
    /*
      2、传入回调函数
          (1)可以获取之前的state,props
          (2)编写对新state处理逻辑
     */
    // this.setState((state,props) => {
    //   return {
    //     message: "colin123"
    //   }
    // })
    /*
     3、setState在React事件处理中是一个异步调用
         (1)如果希望在数据更新之后，获取到相应的结果执行一些逻辑处理
         (2)name可以在setState中传入第二个参数：callback
    */
    this.setState({
      message: "colin123"
    }, () => {
      console.log('异步', this.state.message);
    })
    console.log('异步', this.state.message);
  }
  increment() {

  }
  render() {
    const { message, count } = this.state
    return (<>
      <div>Main</div>
      <div>{message} -- {count}</div>
      <button onClick={() => this.changeText()}>修改message</button>
    </>
    )
  }
}

export default Main