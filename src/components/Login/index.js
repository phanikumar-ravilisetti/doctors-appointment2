import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessfulLogin = jwt => {
    const {history} = this.props
    Cookies.set('jwt_token', jwt, {expires: 30})
    history.replace('/')
  }

  onFailedLogin = msg => this.setState({errorMsg: msg})

  onSubmitLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessfulLogin(data.jwt_token)
    } else {
      this.onFailedLogin(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-bg">
        <form onSubmit={this.onSubmitLogin} className="login-form">
          <h1>Login</h1>
          <label htmlFor="username">USERNAME</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={this.onChangeUsername}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={this.onChangePassword}
          />
          <button type="submit">Login</button>
          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
