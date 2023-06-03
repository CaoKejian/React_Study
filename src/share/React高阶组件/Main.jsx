import React, { Component, PureComponent } from 'react'
import Context from './Context/Context'
import Login from './登录鉴权'
import Main2 from './高阶组件的应用场景'

function hoc(cpn) {
  // 定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <h1>hahahaha</h1>
    }
  }
  return NewCpn
  // // 定义函数组件
  // function newCpn2(props) {

  // }
  // return newCpn2
}
class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello，World</h1>
  }
}
const HelloWorldHoc = hoc(HelloWorld)
export class Main extends Component {
  render() {
    return (
      // <HelloWorldHoc />
      // <Main2 />
      // <Context />
      <Login />
    )
  }
}

export default Main