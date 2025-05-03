import {Component} from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'
import {
  BGContainerlight,
  BGContainerDark,
  Logolight,
  TransparrentBtnlight,
  TransparrentBtnDark,
  ProfileIcon,
  LogoutbtnLight,
  RightContainer,
  LogoutbtnDark,
  PopupLightbox,
  PopupDarkbox,
  Conformbtn,
} from './StyledComponents'

class Header extends Component {
  logoutBtn = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value

          const darkHeader = () => (
            <BGContainerDark>
              <li>
                <Link className="link" to="/">
                  <Logolight
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              </li>
              <RightContainer>
                <TransparrentBtnDark
                  onClick={changeTheme}
                  data-testid="theme"
                  type="button"
                >
                  <FaSun />
                </TransparrentBtnDark>

                <ProfileIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={<LogoutbtnDark type="button">Logout</LogoutbtnDark>}
                >
                  {close => (
                    <PopupDarkbox>
                      <p>Are you sure, you want to logout</p>
                      <div>
                        <LogoutbtnDark type="button" onClick={() => close()}>
                          Cancel
                        </LogoutbtnDark>
                        <Conformbtn type="button" onClick={this.logoutBtn}>
                          Confirm
                        </Conformbtn>
                      </div>
                    </PopupDarkbox>
                  )}
                </Popup>
              </RightContainer>
            </BGContainerDark>
          )

          const lightHeader = () => (
            <BGContainerlight>
              <li>
                <Link className="link" to="/">
                  <Logolight
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              </li>
              <RightContainer>
                <TransparrentBtnlight
                  data-testid="theme"
                  onClick={changeTheme}
                  type="button"
                >
                  <FaMoon />
                </TransparrentBtnlight>

                <ProfileIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <LogoutbtnLight type="button">Logout</LogoutbtnLight>
                  }
                >
                  {close => (
                    <PopupLightbox>
                      <p>Are you sure, you want to logout</p>
                      <div>
                        <LogoutbtnLight type="button" onClick={() => close()}>
                          Cancel
                        </LogoutbtnLight>
                        <Conformbtn type="button" onClick={this.logoutBtn}>
                          Confirm
                        </Conformbtn>
                      </div>
                    </PopupLightbox>
                  )}
                </Popup>
              </RightContainer>
            </BGContainerlight>
          )

          return <>{isDark ? darkHeader() : lightHeader()}</>
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
