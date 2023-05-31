import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context'

export class Main extends Component {
  constructor() {
    super()
    this.state = ({
      info: {
        name: '费父子组件',
        age: 18
      }
    })
  }
  render() {
    const { info } = this.state
    return (<>
      <div>Main</div>

      {/* <Home name={info.name} age={info.age} />
      <Home {...info} /> */}

      <ThemeContext.Provider value={{ color: 'red', size: '30' }}>
        <Home {...info} />
      </ThemeContext.Provider>
    </>
    )
  }
}

export default Main