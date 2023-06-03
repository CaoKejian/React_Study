import React, { PureComponent } from 'react'

import withTheme from './with_theme'

export class Product extends PureComponent {
  render() {
    return (
      <div>Product: {this.props.color}</div>
    )
  }
}

export default withTheme(Product)

// import React, { PureComponent } from 'react'
// import x from './theme_context'

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>Product:
//         <x.Consumer>
//           {
//             value => {
//               return <h2>theme:{value.color} --- {value.size}</h2>
//             }
//           }
//         </x.Consumer>
//       </div>
//     )
//   }
// }

// export default Product