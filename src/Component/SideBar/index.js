import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import {Component} from 'react'
import ThemeContext from '../../Context/ThemeContext'
import SideBarItem from '../SideBarItem'
import {
  SidebarBGlight,
  SidebarItems,
  LightText,
  CustomImg,
  LightDescription,
  SidebarBGDark,
  DarkText,
  DarkDescription,
  LowerBox,
} from './StyledComponents'

const sidebarList = [
  {logoIcon: <IoMdHome />, logoName: 'Home', link: '/'},
  {logoIcon: <FaFire />, logoName: 'Trending', link: '/trending'},
  {logoIcon: <SiYoutubegaming />, logoName: 'Gaming', link: '/gaming'},
  {
    logoIcon: <RiMenuAddLine />,
    logoName: 'Saved videos',
    link: '/saved-videos',
  },
]

class SideBar extends Component {
  render() {
    const {selectedBtn} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const lightSidebar = () => (
            <SidebarBGlight>
              <SidebarItems>
                {sidebarList.map(eachlist => (
                  <SideBarItem
                    key={eachlist.logoName}
                    eachlist={eachlist}
                    isSelected={eachlist.logoName === selectedBtn}
                  />
                ))}
              </SidebarItems>
              <LowerBox>
                <LightText>Contact us</LightText>
                <div>
                  <CustomImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <CustomImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <CustomImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                  <LightDescription>
                    Enjoy! Now to see your channels and recommendations!
                  </LightDescription>
                </div>
              </LowerBox>
            </SidebarBGlight>
          )

          const darkSidebar = () => (
            <SidebarBGDark>
              <SidebarItems>
                {sidebarList.map(eachlist => (
                  <SideBarItem
                    key={eachlist.logoName}
                    eachlist={eachlist}
                    isSelected={eachlist.logoName === selectedBtn}
                  />
                ))}
              </SidebarItems>
              <LowerBox>
                <DarkText>Contact us</DarkText>
                <div>
                  <CustomImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <CustomImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <CustomImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linkedin logo"
                  />
                  <DarkDescription>
                    Enjoy! Now to see your channels and recommendations!
                  </DarkDescription>
                </div>
              </LowerBox>
            </SidebarBGDark>
          )

          return isDark ? darkSidebar() : lightSidebar()
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SideBar
