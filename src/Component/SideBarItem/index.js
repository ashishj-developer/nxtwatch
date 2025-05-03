import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'
import {
  Normalbtnlight,
  Selectedbtnlight,
  NormalTextlight,
  SelectedTextlight,
  Selectedbtndark,
  NormalbtnDark,
  SelectedTextDark,
} from './StyledComponents'

const SideBarItem = props => {
  const {eachlist, isSelected} = props
  const {logoName, logoIcon, link} = eachlist

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const lightSidebarItem = () => {
          if (isSelected) {
            return (
              <Link className="link" to={link}>
                <Selectedbtnlight type="button">
                  {logoIcon}
                  <SelectedTextlight>{logoName}</SelectedTextlight>
                </Selectedbtnlight>
              </Link>
            )
          }
          return (
            <Link className="link" to={link}>
              <Normalbtnlight type="button">
                {logoIcon}
                <NormalTextlight>{logoName}</NormalTextlight>
              </Normalbtnlight>
            </Link>
          )
        }

        const darkSidebarItem = () => {
          if (isSelected) {
            return (
              <Link className="link" to={link}>
                <Selectedbtndark type="button">
                  {logoIcon}
                  <SelectedTextDark>{logoName}</SelectedTextDark>
                </Selectedbtndark>
              </Link>
            )
          }
          return (
            <Link className="link" to={link}>
              <NormalbtnDark type="button">
                {logoIcon}
                <NormalTextlight>{logoName}</NormalTextlight>
              </NormalbtnDark>
            </Link>
          )
        }

        return isDark ? darkSidebarItem() : lightSidebarItem()
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SideBarItem)
