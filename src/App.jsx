import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Main from './share/reduxRdk/Main'
import store from './store2/'
export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main></Main>
      </Provider>
    )
  }
}

export default App
