import React, { Component, PureComponent } from 'react'
import About from './About'

function xxx(OriginCom) {
  class NewCom extends PureComponent {
    constructor() {
      super()
      this.state = {
        userinfo: {
          name: "colin",
          age: 21
        }
      }
    }
    render() {
      return <OriginCom {...this.state.userinfo} />
    }
  }
  return NewCom
}
const Home = xxx(function (props) {
  return <h1>Home:{props.name}</h1>
})

const Profile = xxx(function (props) {
  return <h1>Profile</h1>
})

const HelloWorld = xxx(function (props) {
  return <h1>HelloWorld</h1>
})

export class Main2 extends Component {
  render() {
    return (
      <div>
        <Home />
        <Profile />
        <HelloWorld />
        <About />
      </div>
    )
  }
}

export default Main2