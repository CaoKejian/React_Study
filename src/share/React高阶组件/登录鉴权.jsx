import React, { PureComponent } from 'react'
import loginAuth from './Login/login_auth'

export class Login extends PureComponent {

  render() {
    return (
      <div>Login</div>
    )
  }
}

export default loginAuth(Login)