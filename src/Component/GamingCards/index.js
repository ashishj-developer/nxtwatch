import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'
import {CustomLi, CustomImg, Tittle, Text, TittleDark} from './StyledComponents'

class GamingCards extends Component {
  render() {
    const {eachItems} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const lightItems = () => (
            <Link className="link" to={`/videos/${eachItems.id}`}>
              <CustomLi>
                <CustomImg src={eachItems.thumbnailUrl} alt="video thumbnail" />
                <Tittle>{eachItems.title}</Tittle>
                <Text>{eachItems.viewCount} views</Text>
              </CustomLi>
            </Link>
          )

          const darkItems = () => (
            <Link className="link" to={`/videos/${eachItems.id}`}>
              <CustomLi>
                <CustomImg src={eachItems.thumbnailUrl} alt="video thumbnail" />
                <TittleDark>{eachItems.title}</TittleDark>
                <Text>{eachItems.viewCount} views</Text>
              </CustomLi>
            </Link>
          )

          return isDark ? darkItems() : lightItems()
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(GamingCards)
