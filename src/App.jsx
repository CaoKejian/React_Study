import React from 'react';
import HelloWorld from './share/HelloWorld';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: "ckj"
    }
  }
  render() {
    const { message } = this.state

    return (
      <div>
        <h1>{message}</h1>
        <HelloWorld /> 
      </div>
    )
  }
}
export default App