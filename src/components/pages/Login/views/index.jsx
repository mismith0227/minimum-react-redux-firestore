import React from 'react'
import Api from '../../../../firestore'
import AppBar from '../../../organisms/AppBar'

class Login extends React.Component {
  onLogin() {
    this.props.loginRequested()
  }

  render() {
    return (
      <div>
        <h1>signin</h1>
        <button onClick={() => this.onLogin()}>ログイン</button>
      </div>
    )
  }
}

export default Login
