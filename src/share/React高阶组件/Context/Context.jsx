import React, { PureComponent } from 'react'
import Product from './Product'
import ThemeContext from './theme_context'

export class Context extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: 'red', size: '30' }} >
          <Product />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default Context