import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BGContainer,
  LoginCard,
  Logo,
  CustomForm,
  Customlabel,
  Custominput,
  Showpasswordbox,
  LoginBtn,
  Errormsg,
} from './StyledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    togglePassword: false,
    errorMsg: '',
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = event => {
    this.setState({togglePassword: event.target.checked})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const {history} = this.props
    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  renderLoginForm = () => {
    const {username, password, togglePassword, errorMsg} = this.state

    return (
      <CustomForm onSubmit={this.submitForm}>
        <Customlabel htmlFor="USERNAME">USERNAME</Customlabel>
        <Custominput
          onChange={this.updateUsername}
          value={username}
          id="USERNAME"
          placeholder="Username"
        />
        <Customlabel htmlFor="PASSWORD">PASSWORD</Customlabel>
        <Custominput
          onChange={this.updatePassword}
          type={togglePassword ? 'Text' : 'Password'}
          value={password}
          id="PASSWORD"
          placeholder="Password"
        />
        <Showpasswordbox>
          <input
            onChange={this.showPassword}
            type="checkbox"
            id="showPassword"
          />
          <label htmlFor="showPassword">Show Password</label>
        </Showpasswordbox>
        <LoginBtn type="submit">Login</LoginBtn>
        {errorMsg.length !== 0 && <Errormsg>{errorMsg}</Errormsg>}
      </CustomForm>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BGContainer>
        <LoginCard>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderLoginForm()}
        </LoginCard>
      </BGContainer>
    )
  }
}

export default LoginPage
