import React, { Component } from 'react'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }
  submit(e) {
    e.preventDefault();
    console.log(this.state.username);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ username: e.target.value })
  }
  render() {
    const { username } = this.state
    return (
      <div>
        <form action="/a" onClick={e => this.submit(e)}>
          <label htmlFor="username">
            <input id='username' type="text" name='username' value={username}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
}

export default Main